import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
// import Alert from "components/Alert";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { useRegisterUser } from "api/userService";
// import { ExpandableText } from "./ExpandableText";

const { Title } = Typography;
const { Item, useForm } = Form;

export default function Register({ setShow }) {
  const [form] = useForm();
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", profile_pic: "" });
//   const { isLoading, isSuccess, isError, error, handleRegister } = useRegisterUser();

  return (
    <Form
      layout="vertical"
      form={form}
      requiredMark={false}
    //   onFinish={() =>
    //     handleRegister({
    //       ...registerData,
    //       profile_pic: `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
    //         registerData.name
    //       )}.svg?radius=50`,
    //     })
    //   }
      onFieldsChange={(field) => {
        setRegisterData({ ...registerData, [field[0].name[0]]: field[0].value });
      }}
    >
      <Row>
        <Col span={24}>
          <Col span={24}>
            <Title className="inter-bold" level={3}>
              Register
            </Title>
          </Col>
        </Col>
        <Col span={24}>
          <Item
            name="name"
            label="Name"
            rules={[
              { required: true, type: "string", message: "Please enter your name" },
              { min: 3, message: "Name must be at least 3 characters" },
            ]}
          >
            <Input size="large" placeholder="Your full name" />
          </Item>
        </Col>
        <Col span={24}>
          <Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
          >
            <Input size="large" type="email" placeholder="mail@website.com" />
          </Item>
        </Col>
        <Col span={24}>
          <Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter password" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            <Input.Password
              type="password"
              size="large"
              placeholder="password"
              iconRender={(visible) => (visible ? <FiEye /> : <FiEyeOff />)}
            />
          </Item>
        </Col>
        {/* {isError || isSuccess ? (
          <Col span={24} className="flex justify-center">
            <Alert message={error.replace("Error:", "")} type={isError ? "error" : "success"} showIcon closable />
          </Col>
        ) : null} */}
        
        <Col span={24}>
          <Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
            //   loading={isLoading}
              style={{ marginTop: "1rem", backgroundColor :  "#ff7c02" }}
            >
              Register
            </Button>
          </Item>
        </Col>
        <Col span={24} style={{ marginTop: "1rem" }}>
          <p>
            Already have an Account?
            <Button type="link" onClick={() => setShow("login")} style={{ padding: "0 5px" }}>
              Login
            </Button>
          </p>
        </Col>
      </Row>
    </Form>
  );
}
