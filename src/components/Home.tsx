import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from '../assets/img/logo.png';
import api from '../service/api'
import { IUser } from '../store/modules/user/types';
import { addNewUser } from '../store/modules/user/actions';

const Topo = styled.div`
        background: #fff;
        padding: 20px 0;
        text-align: center;
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
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        api.get('students').then(
            response => {
                setUsers(response.data)
            }
        )
    }, [])

    const handleUsers = useCallback((user: IUser) => {
        dispatch((addNewUser(user)))
    }, [dispatch])

    return (
        <>
            <Topo>
                <img src={Logo} alt="Logo" />
            </Topo>
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
                    {users.map(user => (
                        <article key={user.id} className="home__card-candidate">
                            <div className="home__avatar-candidate">
                                <img src={user.avatar} alt={user.name} />
                            </div>
                            <p> Nome: {user.name} </p>
                            <p> E-mail: {user.email} </p>
                            <p> Idade: {user.age}</p>
                            <button className="home__button" onClick={() => handleUsers(user)}> Adicionar </button>
                        </article>
                    ))}
                </div>
            </SectionUsers>
        </>
    );
}

export default Home;