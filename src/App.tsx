import React, { useState } from "react";
import { ChromePicker } from 'react-color';
import './App.scss';

import { TbColorPicker } from "react-icons/tb";
import { TbPlus } from "react-icons/tb";
import { TbArrowUp } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


import { ReactComponent as Search} from './assets/search.svg';
import { ReactComponent as Friend} from './assets/friend.svg';
import { ReactComponent as Music} from './assets/music.svg';
import { ReactComponent as Setting} from './assets/setting.svg';
import { ReactComponent as Circle} from './assets/circle.svg';
import { ReactComponent as Sparkle} from './assets/sparkle.svg';
import { ReactComponent as Star} from './assets/star.svg';
import { ReactComponent as Heart} from './assets/heart.svg';
import { ReactComponent as Hamburger } from "./assets/hamburger.svg";
import { ReactComponent as Bubble1 } from "./assets/bubble1.svg";
import { ReactComponent as Bubble2 } from "./assets/bubble2.svg";
import { ReactComponent as Bubble3 } from "./assets/bubble3.svg";
import { ReactComponent as Bubble4 } from "./assets/bubble4.svg";



interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a?: number; 
}

const ColorPickerPage = () => {
  const [mainBgColor, setMainBgColor] = useState<RGBAColor>({r: 238, g: 238, b: 238, a: 1});
  const [mainBgPicker, setMainBgPicker] = useState<Boolean>(false);
  const [mainPointColor, setMainPointColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [mainPointPicker, setMainPointPicker] = useState<Boolean>(false);

  // const handleCopy = () => {
  //   const output = `텍스트 컬러: ${textColor}\n배경 컬러: ${bgColor}`;
  //   navigator.clipboard.writeText(output);
  //   alert("컬러 데이터가 복사되었습니다!");
  // };

  const mainTabIcons = [1, 0, 0, 0, 0]
  const passcodeIcons = [1, 1, 0, 0]
  const passcodeKeypad = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '취소', '0']

  return (
    <div>
      <h1>
        kakaotalk.theme simulator
        <p className="twitter-link">@3DA_theme</p>
      </h1>
      <div className="main-container">
        <div className="main-pickers">
          <div>
            <div 
              className="main-picker" 
              style={{ backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})`, color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}}
              onClick={() => setMainBgPicker(!mainBgPicker)}
            >
              <div></div>
              <div>메인 배경 컬러</div>
              <TbColorPicker/>
            </div>
            {mainBgPicker && (
              <div className="popover">
                <div className="cover" onClick={() => setMainBgPicker(false)}/>
                <ChromePicker disableAlpha={true} color={mainBgColor} onChange={(color) => setMainBgColor(color.rgb)}/>
              </div>
            )}
          </div>
          <div>
            <div 
              className="main-picker" 
              style={{ backgroundColor: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`, color: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})` }}
              onClick={() => setMainPointPicker(!mainPointPicker)}
            >
              <div></div>
              <div>포인트 컬러</div>
              <TbColorPicker/>
            </div>
            {mainPointPicker && (
              <div className="popover">
                <div className="cover" onClick={() => setMainPointPicker(false)}/>
                <ChromePicker disableAlpha={true} color={mainPointColor} onChange={(color) => setMainPointColor(color.rgb)}/>
              </div>
            )}
          </div>
        </div>
        <div className="previews">
          <div className="preview" 
            style={{ backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})` 
                    ,color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`
          }}
          >
            <div>
              <div className="header">
                친구
                <div className="icons">
                  <Search width="16px" stroke={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}/>
                  <Friend width="16px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}/>
                  <Music width="16px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}/>
                  <Setting width="16px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}/>
                </div>
              </div>
              <div className="profile" 
                style={{borderBottom:`0.5px solid rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 0.2)` }}
              >
                <div className="image"/>
                내 프로필
              </div>
              <div className="list" 
                style={{borderBottom:`0.5px solid rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 0.2)` }}
              >
                <div className="image"/>
              </div>
              <div className="list" 
                style={{borderBottom:`0.5px solid rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 0.2)` }}
              >
                즐겨찾기
                <IoIosArrowDown />
              </div>
              <div className="list" 
                style={{borderBottom:`0.5px solid rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 0.2)` }}
              >
                추천친구
                <IoIosArrowDown />
              </div>
              <div className="list" 
                style={{borderBottom:`0.5px solid rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 0.2)` }}
              >
                친구 10
                <IoIosArrowDown />
              </div>
            </div>
            <div className="tabbar">
              {mainTabIcons.map((icon) => (
                <Star width="20px" fill={icon===1 ? `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})` : 'transparent'} stroke={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}/>
              ))}
            </div>
          </div>
          <div 
            className="preview"
            style={{ backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})` 
            ,color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`
          }}>
            <div className="passcode">
              <div className="text">
                <div className="title">암호 입력</div>
                <div className="description">카카오톡 암호를 입력해 주세요.</div>
              </div>
              <div className="icons">
              {passcodeIcons.map((icon) => (
                <Star width="20px" fill={icon===1 ? `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})` : 'transparent'} stroke={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}/>
              ))}
              </div>
            </div>
            <div className="keypad">
              <div className="numbers">
                {passcodeKeypad.map((i)=>(
                  <div className="number">{i}</div>
                ))}
              </div>
            </div>
          </div>
          <div 
            className="preview"
            style={{ backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})` 
          }}>
            <div>
              <div className="header">
                <div style={{width:'36px', height:'16px'}}>
                  <IoIosArrowBack/>
                </div>
                <div className="title">채팅방</div>
                <div className="icons">
                  <Search width='16px' stroke="black"/>
                  <Hamburger width='16px'/>
                </div>
              </div>
              <div className="dialogues">
                <div className="dialogue left" style={{color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}}>
                  <div className="profile-image">
                    <Star width="14px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 0.6)`}/>
                  </div>
                  <div className="bubble-container">
                    <div style = {{color:"black"}}>상대</div>
                    <div style={{position:'relative'}}>
                      <Bubble1 width='68px' fill='white' stroke={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.b})`}/>
                      <div style={{position:'absolute', zIndex:2, top:6, left:10}}>Lorem ipsum</div>
                    </div>
                  </div>
                </div>
                <div className="dialogue right" style={{color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}}>
                  <div className="bubble-container">
                    <div style={{position:'relative'}}>
                      <Bubble1 width='68px' fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.b})`}/>
                      <div style={{position:'absolute', zIndex:2, top:6, left:10, color:'white'}}>Lorem ipsum</div>
                    </div>
                  </div>
                </div>
                <div className="dialogue left" style={{color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}}>
                  <div className="profile-image">
                    <Star width="14px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 0.6)`}/>
                  </div>
                  <div className="bubble-container">
                    <div style = {{color:"black"}}>상대</div>
                    <div style={{position:'relative'}}>
                      <Bubble2 width='150px' fill='white' stroke={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.b})`}/>
                      <div style={{position:'absolute', zIndex:2, top:6, left:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                    </div>
                    <div style={{position:'relative'}}>
                      <Bubble3 width='150px' fill='white' stroke={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.b})`}/>
                      <div style={{position:'absolute', zIndex:2, top:6, left:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                    </div>
                  </div>
                </div>
                <div className="dialogue right" style={{color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}}>
                  <div className="bubble-container right">
                    <div style={{position:'relative'}}>
                      <Bubble2 width='150px' fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.b})`}/>
                      <div style={{position:'absolute', zIndex:2, top:6, left:10, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                    </div>
                    <div style={{position:'relative'}}>
                      <Bubble4 width='150px' fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.b})`}/>
                      <div style={{position:'absolute', zIndex:2, top:6, left:10, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-container"
              style={{backgroundColor: 'white'}}
            >
              <div className="icon-container" style={{backgroundColor: 'rgb(245, 245, 245)'}}>
                <TbPlus />
              </div>
              <div className="text-input">입력창</div>
              <div className="icon-container" style={{backgroundColor: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}}>
                <TbArrowUp color="white"/>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*
      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={handleCopy}
      >
        출력 및 복사
      </button> */}
    </div>
  );
};

export default ColorPickerPage;
