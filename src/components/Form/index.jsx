
import React from "react";
import {message} from 'antd'
import {MailOutlined} from '@ant-design/icons'
import './index.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    return (
      <div className="card-connect">
            <div className="card-header">
                <div className="info-header">
                    <MailOutlined />
                    <h3>Connect</h3>
                </div>
            </div>
            <hr className="card-line"/>
            <div className="container-contact100">
              <div className="wrap-contact100">
                <form className="contact100-form validate-form"
                  onSubmit={this.submitForm}
                  action="https://formspree.io/mgenkzqp"
                  method="POST"
                >
                  <span className="contact100-form-title">
                  <strong>Have a question or want to work together ?</strong>
                  </span>
                  <div className="wrap-input100 validate-input" data-validate = "Please enter your email: e@a.x">
                    <input className="input100" type="text" name="email" placeholder="E-mail" />
                    <span className="focus-input100"></span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate = "Please enter your message">
                    <textarea className="input100" name="message" placeholder="Your Message"></textarea>
                    <span className="focus-input100"></span>
                  </div>
                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn">
                      <span>
                        <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                        Send me
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        message.success("Cảm ơn vì đã để lại lời nhắn <3")
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
        message.error("Đã có lỗi, bạn kiểm tra lại đi nào <3 .")

      }
    };
    xhr.send(data);
  }
}