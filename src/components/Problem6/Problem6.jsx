// reate a OTP Login in reactJS.

// Hint: you have seen Login via OTP on some sort of site like: hotstar etc. you have to build that. here is the basic prototype/design 

// Note: suppose that if user enter first digit of OTP, so cursor will automatically jump to the second digit.


import './Problem6.css';

import { useState, useEffect, useRef, } from 'react';

const Problem6 = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const length = 4;

    const inputRef = useRef([]);
    const [value, setValue] = useState(new Array(length).fill(""));

    function onSubmit(value){
        if(value === otp.join('')){
            alert('Login Successfull');
            setOtp('');
            setPhone('');
            setValue(new Array(length).fill(''));
        }
        else{
            alert('Invalid OTP');
        }
    }

    const handlePhoneChange = () => {
        if (phone.length === 11) {
            alert("OTP sent to your phone number");

            // Generate OTP
            let otp = Math.floor(1000 + Math.random() * 9000);
            console.log(otp);
            otp = otp.toString().split('');
            setOtp(otp);
        }
        else {
            alert("Please enter a valid phone number");
        }

    }

    const onChangeHandler = ({ target: { value: inputValue } }, index) => {
        if (isNaN(inputValue)) return;

        const newValue = [...value];
        newValue[index] = inputValue.slice(-1);
        setValue(newValue);

        if (inputValue && index < length - 1) inputRef.current[index + 1].focus();

        const finalValue = newValue.join("");
        finalValue.length === length && onSubmit(finalValue);
    };

    const onClickHandler = (index) => inputRef.current[index].setSelectionRange(1, 1);

    const onKeyDownHandler = (e, index) => {
        if (e.key === "Backspace" && index > 0 && !value[index]) {
            inputRef.current[index - 1].focus();
        }
    };

    useEffect(() => {
        if (inputRef.current[0]) inputRef.current[0].focus();
    }, [otp]);

    return (
        <div className="P6Container">
            {otp === '' ? (
                <div className='PhoneNumberCard'>
                    <h1>OTP LOGIN</h1>
                    <div className="phone">
                        <input type="number" min={0} placeholder="Enter Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
                        <br></br>
                        <button onClick={handlePhoneChange}>Send OTP</button>
                    </div>
                </div>
            ) : (

                <div className="P6OtpCard">
                    <h1>OTP LOGIN</h1>
                    <form className='otp'>
                        {value.map((item, index) => (
                            <input
                                key={index}
                                ref={(input) => (inputRef.current[index] = input)}
                                value={item}
                                placeholder="0"
                                onChange={(e) => onChangeHandler(e, index)}
                                onClick={() => onClickHandler(index)}
                                onKeyDown={(e) => onKeyDownHandler(e, index)}
                            />
                        ))}
                    </form> 
                </div>
            )}
        </div>
    )
}


export default Problem6;