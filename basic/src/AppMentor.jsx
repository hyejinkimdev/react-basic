import React, {  useState } from 'react';
// import './appMentor.scss';

// js개념
// const obj = {
//     name: '엘리',
//     title: '개발자',
//     mentor: {
//         name: '밥',
//         title: '시니어 개발자',
//     },
// }
// const name = '업데이트 이름';
// const update = {
//     // spread 연산자 
//     ...obj,
//     //mentor를 update, 덮어씌워줌
//     mentor: {...obj.mentor, name},
// }
export default function AppMentor(){
    const [person, setPerson] = useState ({
        name: '엘리',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어 개발자',
        },
    });
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})</p>
            <button
            onClick={() =>{
                const name = prompt(`waht's your mentor's name?`);
                //... -> key, value 낱개로 풀어서 복사
                setPerson((person) => ({
                    ...person, 
                    mentor: {...person.mentor, name:name},
                }));
            }}
            >
                멘토 이름 바꾸기
            </button>
            <button
            onClick={() =>{
                const title = prompt(`waht's your mentor's title?`);
                //... -> key, value 낱개로 풀어서 복사
                setPerson((person) => ({
                    ...person, 
                    mentor: {...person.mentor, title:title},
                }));
            }}>
                멘토 타이틀 바꾸기
            </button>
        </div>

    );
}