import React from 'react';
import { useSelector } from 'react-redux';

import { IGlobalState } from '../store/modules/user/types'

import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionAlunos = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    background: url('/background-section-students.jpg');
    background-color: #fff;
    padding: 1rem;
`;

const TitleMatriculas = styled.h1`
        color: #000;
         font-weight: 900;
         font-size: 1.75rem;
         text-transform: uppercase;
         text-align: center;
         padding: 10px 0;
`;

const ListaMatriculas = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    text-align: center;

    img{
        width: 100%;
        max-width: 100px;
        border-radius: 50%;
    }

    p{
        padding: 10px 0;
        font-size: 1.125rem;
        font-weight: 700;
    }
`;

const ItemMatriculas = styled.li`
        width: 100%;
         max-width: 300px;
         margin: 10px;
         background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
         border-radius: 10px;
         padding: 1rem;
         box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const AboutUS: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users)

    return (
        <SectionAlunos>
            <TitleMatriculas>Matriculados, Academia Accenture 2.1</TitleMatriculas>
            <ListaMatriculas >
                {state.map((user, index) => (
                    <ItemMatriculas
                        key={index}
                        as={motion.li}
                        animate={{ y: 15 }}
                        transition={{ duration: 1 }}
                        >
                        <img src={user.avatar} alt={user.name} />
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </ItemMatriculas>
                ))}
            </ListaMatriculas>
        </SectionAlunos>
    );
}

export default AboutUS;