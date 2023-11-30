import { Button, Checkbox, DatePicker, Form, Input, Modal, Switch, message } from 'antd';
import { Contract, ethers } from 'ethers';
import React, { useState } from 'react';
import BettingContract from '../../artifacts/contracts/Bet.sol/BettingContract.json';

function CreateGameModal({setSpinningText,spinning, setSpinning,setCounter, counter,createGameModalIsOpen, setCreateGameModalIsOpen }) {
    const [form] = Form.useForm();
    // const [formLayout, setFormLayout] = useState < LayoutType > 'horizontal';

    const handleModal = () => {
        setCreateGameModalIsOpen(false);
    };

    const onFinish = async (values) => {
        // console.log('Success:', values);
        setCreateGameModalIsOpen(false);
        setSpinningText("Allow transaction to proceed")
        setSpinning(true);



        const provider = new ethers.BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();

        const contract = new Contract(
            process.env.REACT_APP_PUBLIC_KEY,
            BettingContract.abi,
            signer
        );


        const createGameTransaction = await contract.createGame(values.decription);

        setSpinningText("Transaction in progress")


        await createGameTransaction.wait();
        
        console.log("transaction done")
        setCounter(counter+1);



        message.success("Game created!")
        window.location.reload(1)

        
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <Modal
            title=<h1 style={{ color: '#707070' }}>Create Game</h1>
            open={createGameModalIsOpen}
            onOk={onFinish}
            closeIcon={null}
            footer={null}
            // style={{padding : "20px"}}
            onCancel={handleModal}
        >
            <Form
                name="basic"
                // labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, marginTop: '25px' }}
                // initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Description"
                    name="decription"
                    rules={[
                        {
                            required: true,
                            message: 'Please describe your game',
                        },
                    ]}
                >
                    <Input
                        placeholder="Describe your game"
                        style={
                            {
                                // border: 'none',
                                // borderBottom: '2px solid lightgrey',
                                // borderRadius: '0',
                                // fontSize: '17px',
                            }
                        }
                    />
                </Form.Item>
                <Form.Item
                    label="Last Date"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the last date',
                        },
                    ]}
                >
                    <DatePicker size="middle" />
                </Form.Item>

                <Form.Item
                    label="Public"
                    name="isPublic"
                    valuePropName="checked"
                >
                    <Switch defaultChecked onChange={onChange} />;
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 18, span: 17 }}>
                    <Button type="primary" htmlType="submit">
                        Create game
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateGameModal;
