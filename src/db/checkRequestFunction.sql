CREATE FUNCTION public.check_request()
  RETURNS void
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
DECLARE
  req_app_api_key text := current_setting('request.headers', true)::json->>'x-app-api-key';
  is_app_api_key_registered boolean;
  jwt_role text := current_setting('request.jwt.claims', true)::json->>'role';
BEGIN
  IF jwt_role <> 'anon' THEN
    RETURN;
  END IF;

  SELECT true INTO is_app_api_key_registered
  FROM api.accounts
  WHERE id = req_app_api_key::uuid
  LIMIT 1;

  IF is_app_api_key_registered IS TRUE THEN
    RETURN;
  END IF;

  RAISE sqlstate 'PGRST' USING
    message = json_build_object('message', 'No registered API key found in x-app-api-key header.')::text,
    detail = json_build_object('status', 403)::text;
END;
$$;
