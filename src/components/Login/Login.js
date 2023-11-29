import { Button, Form, Input, Typography } from "antd";
// import Alert from "components/Alert";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { useLoginQuery } from "api/userService";

const { Title } = Typography;
const { Item, useForm } = Form;

export default function Login({ setShow }) {
  const [form] = useForm();
  const [error, setError] = useState("");
  

  return (
    <>
      <Title className="inter-bold" level={3}>
        Login
      </Title>
      <Form
        layout="vertical"
        form={form}
        requiredMark={false}
        // onFinish={(values) =>
        //   login.mutateAsync(values, {
        //     onError: (err) => {
        //       if (err.response?.data.message) setError(err.response.data.message);
        //       else setError("Some error occurred. Please try again later");
        //     },
        //   })
        // }
      >
        <Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input size="large" type="email" placeholder="mail@website.com" autoComplete="on" />
        </Item>
        <Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}>
          <Input.Password
            type="password"
            size="large"
            placeholder="password"
            iconRender={(visible) => (visible ? <FiEye /> : <FiEyeOff />)}
            autoComplete="on"
          />
        </Item>
        {/* {/* {login.isError ? (
          <div className="flex justify-center">
            <Alert message={error.toSentenceCase()} type="error" showIcon closable />
          </div>
        ) : null} */}
        <Item>
          <Button
            block
            // type="primary"
            
            htmlType="submit"
            size="large"
            // loading={login.isLoading} */}
            style={{ marginTop: "1rem", backgroundColor : "#ff7c02" }}
          >
            Login
          </Button>
        </Item>
      </Form>
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <span >Not registered yet?</span>
        <Button type="link" onClick={() => setShow("register")} style={{ padding: "0 5px" }}>
          Create an Account
        </Button>
      </div>
    </>
  );
}
