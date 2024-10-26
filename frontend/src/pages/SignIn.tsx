import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { TextField } from "../components";
import { loginSchema } from "../validations";
import { useValidateForm } from "../hooks";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton } from "@mui/material";
import { useLoginMutation } from "../api";
import { toastOptionsAtom } from "../store";
import { useAtom } from "jotai";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    width: "400px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [, setToastOptions] = useAtom(toastOptionsAtom);

  const loginMutation = useLoginMutation();

  const { register, handleSubmit, errors } = useValidateForm(loginSchema);

  const handleLogin = (data: any) => {
    console.log(data);

    setToastOptions({
      open: true,
      message: "SignIn successful",
      severity: "success",
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(handleLogin)}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 4,
          }}
        >
          <TextField
            label={"Username"}
            register={register}
            error={errors["userName"]}
            id="userName"
            name="userName"
            placeholder="username"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: "username" }}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label={"Password"}
            register={register}
            error={errors["password"]}
            name="password"
            placeholder="••••••"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button type="submit" fullWidth variant="contained">
            Sign in
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/sign-up" sx={{ alignSelf: "center" }}>
                Sign up
              </Link>
            </span>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
