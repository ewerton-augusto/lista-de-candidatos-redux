import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify'

import Logo from '../assets/img/logo.png';
import { IUser } from '../store/modules/user/types';
import { addNewUser } from '../store/modules/user/actions';

const Topo = styled.div`
        background: #fff;
        padding: 20px 0;
        text-align: center;
`;

const FormCadastro = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    padding: 1rem;
    border: 1px solid var(--primary-bg-color);
    border-radius: 10px;
    margin: 1rem;
    background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);

    input{
        padding: 1rem;
        margin: 1rem 0%;
    }
`;

const SectionUsers = styled.section`
     background: var(--thirdy-bg-color);
     padding: 1rem;

     .home__title{
         color: #fff;
         font-weight: 900;
         font-size: 1.75rem;
         text-transform: uppercase;
         text-align: center;
         padding: 10px 0;
     }

     .home__div-candidate{
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         justify-content: space-around;
     }

     .home__card-candidate{
         width: 100%;
         max-width: 350px;
         margin: 10px 0;
         background: #fff;
         border-radius: 10px;
         padding: 1rem;
         box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
     }

     .home__avatar-candidate{
         text-align: center;
     }

     .home__avatar-candidate img{
         max-width: 100px;
         box-shadow: 0 0 10px 4px var(--primary-bg-color);
         margin: 10px;
         border-radius: 50%;
     }

     .home__card-candidate p{
         margin: 10px 0;
     }

     .home__button{
         color: #fff;
         background: var(--primary-bg-color);
         font-weight: 600;
         padding: 10px;
         border: 1px solid #ccc;
         border-radius: 5px;
         text-transform: uppercase;
         cursor: pointer;
         width: -webkit-fill-available;
         transition: border 0.2s;
     }

     .home__button:hover{
        border: 1px solid var(--primary-bg-color);
        box-shadow: 1px 2px 8px rgba(122, 110, 249, 0.8);
        opacity:.9;
     }

     .home__button:focus{
         outline-color: var(--secondary-bg-color);
     }
     
`

const Home: React.FC = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [avatar, setAvatar] = useState('');
    const [allUsers, setAllUser] = useState<IUser[]>(() => {
        const usersStorage = localStorage.getItem('@tester')
        if (usersStorage) {
            return JSON.parse(usersStorage)
        }
        return []
    })

    useEffect(() => {
        allUsers.map(user => dispatch((addNewUser(user))))
    }, [allUsers])

    function hadleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(Math.random())
        toast.success('Formulário acionado!!')
        localStorage.setItem('@tester', JSON.stringify([...allUsers, { name, email, age, avatar }]));
        setAllUser([...allUsers, { name, email, age, avatar }])
    }

    return (
        <>
            <Topo>
                <img src={Logo} alt="Logo" />
            </Topo>
            <div>
                <FormCadastro onSubmit={hadleSubmit}>
                    <input onChange={e => setName(e.target.value)} placeholder="Nome do aluno" type="text" name="name" />
                    <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" name="email" />
                    <input onChange={e => setAge(e.target.value)} placeholder="Idade" type="number" name="age" />
                    {() => setAvatar('/candidates/avatar1.png')}
                    <input type="submit" value="cadastrar" /> 
                </FormCadastro>
            </div>
            <SectionUsers
                as={motion.section}
                transition={{ delay: 0.1, duration: 0.9 }}
                variants={{
                    show: { opacity: 1, y: '0' },
                    hidden: { opacity: 0, y: '40%' },
                }}
                initial="hidden"
                animate="show">

                <h1 className="home__title">Lista de candidatos</h1>

                <div className="home__div-candidate">
                    {/*users.map(user => (
                        <article key={user.id} className="home__card-candidate">
                            <div className="home__avatar-candidate">
                                <img src={user.avatar} alt={user.name} />
                            </div>
                            <p> Nome: {user.name} </p>
                            <p> E-mail: {user.email} </p>
                            <p> Idade: {user.age}</p>
                            <button className="home__button" onClick={() => handleUsers(user)}> Adicionar </button>
                        </article>
                    ))*/}
                </div>
            </SectionUsers>
        </>
    );
}

export default Home;