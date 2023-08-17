import React, { useState, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.css';

const ARRAY = [0, 1, 2, 3, 4];

function Star({ onChangeScore }) {

  const score = useRef(0);

  const [clicked, setClicked] = useState([false, false, false, false, false]);  // flase 5개를 담는 배열이 초기값으로 clicked 변수에 저장된다.
  const countClick = useRef([false, false, false, false, false]);

  const totalFunction = (index) => {
    countStarClick(index);
    handleStarClick(index);
  }

  const handleStarClick = (index) => {  // 인자로 index가 들어온다.
    let clickStates = [...clicked]; //현 상태 값, 첫 화면 렌더링시에는 [false, false, false, false, false] 값이 clickStates 변수에 담긴다.
    for (let i = 0; i < ARRAY.length; i++) {  // 별평점은 5개 만점이므로 ARRAY 배열의 길이로 회전수를 정한다.
      clickStates[i] = (i) <= index ? true : false; // 초기화한 변수의 인덱스 순서대로 함수의 매개변수의 숫자값과 비교하여 boolean 값을 해당 인덱스에 저장한다. 예 (index가 2라면 true,true,true,false,flase를 반환한다.)
    }
    setClicked(clickStates); // 배열을 setClicked의 매개변수로 넣고 현재 clicked 상태값을 변경한다.
    score.current = clicked.filter(Boolean).length; // 이 함수는 현 상태의 clicked 배열에서 true로만 구성된 배열의 length를 score 변수에 저장한다.
  };

  const countStarClick = (index) => {
    let clickStates = [...countClick.current];
    for (let i = 0; i < ARRAY.length; i++) {
      clickStates[i] = (i) <= index ? true : false;
    }
    countClick.current = clickStates;
    score.current = countClick.current.filter(Boolean).length;
    onChangeScore(score.current);
    console.log('star 페이지1 ' + score.current);
  };

  return (
    <div className='clickedStars' value={score.current} id="star" name="star">
      {ARRAY.map((index) => {
        return (
          <FaStar
            key={index}
            size="25"
            onClick={() => totalFunction(index)}
            className={clicked[index] && 'redStar'}
          />
        );
      })}
    </div>
  );
}

export default Star;