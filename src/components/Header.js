import React from "react";

const Header = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/304b7563-abfe-41bf-95d0-8bb58c03bea6/US-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_633da30f-4247-4a0f-b146-0501cbf91542_large.jpg')` }}>
      <div className="absolute top-5 left-5 bg-black bg-opacity-10 p-2 rounded">
        <img
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-44"
        />
      </div>
    </div>
  );
};

export default Header;
