import React from "react";

const Login = () => {
  return (
    <section className="login_wrap">
      <div className="login_header">
        <h3>Login</h3>
        <p>로그인을 해주세요!</p>
      </div>
      <div className="login_form">
        <form action="#" name="#" method="post">
          <fieldset>
            <legend className="blind">로그인 영역</legend>
            <div>
              <label htmlFor="yourId" className="required blind">
                아이디
              </label>
              <input
                type="text"
                id="yourId"
                name="yourId"
                placeholder="아이디"
                className="input_style"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="youPass" className="required blind">
                비밀번호
              </label>
              <input
                type="paddword"
                id="youPass"
                name="youPass"
                placeholder="비밀번호"
                className="input_style"
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="btn_style2 mt30">
              로그인
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Login;
