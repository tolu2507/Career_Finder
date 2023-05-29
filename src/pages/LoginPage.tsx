import { LoginComponent } from "../component/login/LoginComponent";

export function Login() {
  const backgroundImageUrl = "url(/images/background.png)";

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: backgroundImageUrl }}
      />
      <div className="absolute inset-0 bg-blue-700 opacity-70" />

      {/* Content of the project */}
      <LoginComponent />
    </div>
  );
}
//  h-[100px]
