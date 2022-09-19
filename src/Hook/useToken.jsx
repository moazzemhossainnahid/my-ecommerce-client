import { useEffect, useState } from 'react';

const UseToken = (user) => {
    const [token, setToken] = useState('');
    useEffect( () => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        const currentUser = {
            email:  email,
            name: name,
            joiningDate: date
        }
        if(email){
            fetch(`https://my-ecommerce-nh.herokuapp.com/user`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.accessToken;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
};

export default UseToken;