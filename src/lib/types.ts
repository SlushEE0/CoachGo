const State = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};

const SignUpState = {
  ...State,
  ALREADY_EXISTS: "ALREADY_EXISTS",
  BAD_PARAMS: "BAD_PARAMS"
};
