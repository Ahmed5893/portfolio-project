import React, { useState } from "react";
import "./Contact.css";
import AbsoluteWrapper from "../AbsoluteWrapper";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

import Loading from "./Loading";
import Success from "./Success";
import Fail from "./Fail";
import { Promise } from "es6-promise";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const submitRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    await timeout(3000);
    let data = {
      name,
      lastname,
      email,
      subject,
      message,
    };
    await axios
      .post("/api/send", data)
      .then((res) => {
        if (res.data.status === "success") {
          setSent({ sent: true });
          setLoading({ loading: false });
        } else {
          setSent({ sent: true });
          setError({ error: true });
          setLoading({ loading: false });
        }
      })
      .catch((err) => {
        console.log("message not sent", err);
        setLoading({ loading: false });

        setError({ error: true });
      });
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      color: "black",
    },
  }));
  const classes = useStyles();

  return (
    <AbsoluteWrapper>
      <div className="container">
        {sent ? (
          <Success />
        ) : error ? (
          <Fail />
        ) : loading ? (
          <Loading />
        ) : (
          <div className="contact">
            <h2 id="title">Email Me</h2>

            <form onSubmit={submitRequest}>
              <p>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </p>
              <p>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastname}
                  required
                />
              </p>
              <p>
                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </p>
              <p>
                <label>Subject </label>
                <input
                  type="text"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  required
                />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="3"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                ></textarea>
              </p>
              <p className=" submit">
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  endIcon={<Icon>send</Icon>}
                >
                  Send
                </Button>
              </p>
            </form>
          </div>
        )}{" "}
      </div>
    </AbsoluteWrapper>
  );
};

export default Contact;
