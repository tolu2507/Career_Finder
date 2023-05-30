import { LoginComponent } from "../component/login/LoginComponent";

export function Login() {
  const backgroundImageUrl = "url(/images/background.png)";

  return (
    <div className="relative min-w-[700px] font-hind">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center min-w-[700px]"
        style={{ backgroundImage: backgroundImageUrl }}
      />
      <div className="absolute inset-0 bg-blue-700 opacity-70 min-w-[700px]" />

      {/* Content of the project */}
      <LoginComponent />
    </div>
  );
};
