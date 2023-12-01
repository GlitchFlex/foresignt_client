import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Modal,
    Radio,
    Space,
    Switch,
    message,
} from 'antd';
import { Contract, ethers } from 'ethers';
import React, { useState } from 'react';
import BettingContract from '../../artifacts/contracts/Bet.sol/BettingContract.json';

function PlaceBetModal({index ,game, betModalIsOpen, setBetModalIsOpen }) {
    const [form] = Form.useForm();
    const [value, setValue] = useState(1);
    const [amount, setAmount] = useState();

    const handleModal = () => {
        setBetModalIsOpen(false);
    };

    const onAmountChange = (value)=>{
        setAmount(value);
    }

    const onFinish = async (values) => {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(
            process.env.REACT_APP_PUBLIC_KEY,
            BettingContract.abi,
            signer,
        
        );

        // ethers.utils.parseUnits(amount.toString(), 'ether')
        // const WeiToEther = ethers.utils.formatEther(weiValue)
        // amount(amount);
        // const obj = { value: parseInt(mount)*100000};
        // console.log(amount, {...options})

        await contract.placeBet(index, 0 ,{ value: ethers.parseUnits(amount.toString(),18) });
    };

    console.log(index);
    

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (e) => {
        console.log("selected now",e.target.value);
        setValue(e.target.value);
      };
    return (
        <Modal
            title=<h1 style={{ color: '#707070' }}>{game[0]}</h1>
            open={betModalIsOpen}
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
                <div>

                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        {game[6].map((element, index)=>(
                            <Radio value={index}>{element}</Radio>
                        ))}
                    </Space>
                </Radio.Group>

                <InputNumber  defaultValue={1} onChange={onAmountChange} />
                </div>

                <Form.Item wrapperCol={{ offset: 18, span: 17 }}>
                    <Button type="primary" htmlType="submit">
                        Transact
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default PlaceBetModal;
