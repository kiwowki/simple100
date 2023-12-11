import React, { useState } from "react";

import firebase from "../../firebase.js";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Join = () => {
  const [youName, setYouName] = useState("");
  const [youEmail, setYouEmail] = useState("");
  const [youPass, setYouPass] = useState("");
  const [youPassC, setYouPassC] = useState("");

  // let navigate = useNavigate();

  const JoinFunc = async (e) => {
    e.preventDefault();

    if (!(youName && youEmail && youPass && youPassC)) {
      return alert("모든 항목을 채워야 회원가입이 가능합니다.");
    }
    if (youPass !== youPassC) {
      return alert("비밀번호가 다르네요!");
    }

    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(youEmail, youPass);

    await createdUser.user.updateProfile({
      displayName: youName,
    });

    // 개인정보 -> database
    // let body = {
    //   email: createdUser.user.multiFactor.user.email,
    //   displayName: createdUser.user.multiFactor.user.displayName,
    //   uid: createdUser.user.multiFactor.user.uid,
    // }
    // axios.post("/api/user/join", body)
    //   .then((response) => {
    //     if(response.data.success){
    //       navigate("/login");
    //     } else {
    //       return alert("회원가입이 실패하였습니다.")
    //     }
    //   })




    // try {
    //   // firebase야 인증 좀 해줘.
    //   let createdUser = await firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(youEmail, youPass);

    //   await createdUser.user.updateProfile({
    //     displayName: youName,
    //   });

    //   console.log(createdUser.user);
    // } catch (error) {
    //   if (error.code === "auth/email-already-in-use") {
    //     alert(
    //       "이미 가입된 이메일 주소입니다. 다른 이메일 주소를 사용해주세요."
    //     );
    //   } else {
    //     console.error("회원가입 중 오류 발생:", error.message);
    //   }
    // }
  };

  return (
    <section className="join_wrap">
      <div className="join_header">
        <h3>Join</h3>
        <p>회원가입 감사합니다!</p>
      </div>
      <div className="join_form">
        <form action="#" name="#" method="post">
          <fieldset>
            <legend className="blind">회원가입 영역</legend>
            <div>
              <label htmlFor="youName" className="required blind">
                name
              </label>
              <input
                type="text"
                id="youName"
                name="youName"
                placeholder="Name"
                className="input_style"
                autoComplete="off"
                required
                value={youName}
                onChange={(e) => setYouName(e.currentTarget.value)}
              />
            </div>
            <div>
              <label htmlFor="youEmail" className="required blind">
                email
              </label>
              <input
                type="email"
                id="youEmail"
                name="youEmail"
                placeholder="Email"
                className="input_style"
                autoComplete="off"
                required
                value={youEmail}
                onChange={(e) => setYouEmail(e.currentTarget.value)}
              />
            </div>
            <div>
              <label htmlFor="youPass" className="required blind">
                password
              </label>
              <input
                type="text"
                id="youPass"
                name="youPass"
                placeholder="Password"
                className="input_style"
                autoComplete="off"
                required
                value={youPass}
                onChange={(e) => setYouPass(e.currentTarget.value)}
              />
            </div>
            <div>
              <label htmlFor="youPassC" className="required blind">
                password 확인
              </label>
              <input
                type="text"
                id="youPassC"
                name="youPassC"
                placeholder="Password Check"
                className="input_style"
                autoComplete="off"
                required
                value={youPassC}
                onChange={(e) => setYouPassC(e.currentTarget.value)}
              />
            </div>
            <button
              type="submit"
              className="btn_style2 mt100"
              onClick={(e) => JoinFunc(e)}
            >
              Complete
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Join;
