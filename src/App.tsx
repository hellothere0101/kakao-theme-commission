import React, { useEffect, useState } from "react";
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

  const [lineColor, setLineColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [linePicker, setLinePicker] = useState<Boolean>(false);
  const [iconColor, setIconColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [iconPicker, setIconPicker] = useState<Boolean>(false);
  const [iconShape, setIconShape] = useState('star');

  const [passBgColor, setPassBgColor] = useState<RGBAColor>({r: 238, g: 238, b: 238, a: 1});
  const [passBgPicker, setPassBgPicker] = useState<Boolean>(false);
  const [passcodeColor, setPasscodeColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [passcodePicker, setPasscodePicker] = useState<Boolean>(false);

  const [chatBgColor, setChatBgColor] = useState<RGBAColor>({r: 238, g: 238, b: 238, a: 1});
  const [chatBgPicker, setChatBgPicker] = useState<Boolean>(false);
  const [chatInputColor, setChatInputColor] = useState<RGBAColor>({r: 255, g: 255, b: 255, a: 1});
  const [chatInputPicker, setChatInputPicker] = useState<Boolean>(false);
  const [chatButtonColor, setChatButtonColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [chatButtonPicker, setChatButtonPicker] = useState<Boolean>(false);

  const [bubbleYouColor, setBubbleYouColor] = useState<RGBAColor>({r: 255, g: 255, b: 255, a: 0.6});
  const [bubbleYouPicker, setBubbleYouPicker] = useState<Boolean>(false);
  const [bubbleYouBorderColor, setBubbleYouBorderColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [bubbleYouBorderPicker, setBubbleYouBorderPicker] = useState<Boolean>(false);
  const [bubbleYouTextColor, setBubbleYouTextColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [bubbleYouTextPicker, setBubbleYouTextPicker] = useState<Boolean>(false);

  const [bubbleMeColor, setBubbleMeColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [bubbleMePicker, setBubbleMePicker] = useState<Boolean>(false);
  const [bubbleMeBorderColor, setBubbleMeBorderColor] = useState<RGBAColor>({r: 55, g: 55, b: 55, a: 1});
  const [bubbleMeBorderPicker, setBubbleMeBorderPicker] = useState<Boolean>(false);
  const [bubbleMeTextColor, setBubbleMeTextColor] = useState<RGBAColor>({r: 255, g: 255, b: 255, a: 1});
  const [bubbleMeTextPicker, setBubbleMeTextPicker] = useState<Boolean>(false);

  const [chatBackground, setChatBackground] = useState<string | null>(null);
  const [mainBackground, setMainBackground] = useState<string | null>(null);

  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);

  const mainTabIcons = [1, 0, 0, 0, 0]
  const passcodeIcons = [1, 1, 0, 0]
  const passcodeKeypad = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '취소', '0']

  useEffect(() => {
    const luminance = calculateLuminance(mainBgColor);
    if (luminance > 0.179) {
      setIsDarkMode(false);
      setBubbleYouColor({r: 255, g: 255, b: 255, a: 0.6})
      setBubbleYouBorderColor(mainPointColor)
      setBubbleMeTextColor({r: 255, g: 255, b: 255, a: 1})
      setChatInputColor({r: 255, g: 255, b: 255, a: 1})
      setBubbleYouBorderColor(mainPointColor)
    } else {
      setIsDarkMode(true)
      setBubbleYouColor({r: 0, g: 0, b: 0, a: 0.4})
      setBubbleYouBorderColor({r: 0, g: 0, b: 0, a: 0})
      setBubbleMeTextColor(mainBgColor)
      setChatInputColor({r: mainBgColor.r+40, g: mainBgColor.g+40, b: mainBgColor.b+40, a: 1})
    }
  }, [mainBgColor])

  const handleBackgroundPicker = (color: RGBAColor) => {
    if (!isDarkMode) {
    }
    else {
    }
    setMainBgColor(color)
    setPassBgColor(color)
    setChatBgColor(color)
  }

  const handlePointColorPicker = (color: RGBAColor) => {
    setMainPointColor(color)
    setLineColor(color)
    setIconColor(color)
    setPasscodeColor(color)
    setBubbleMeColor(color)
    setBubbleMeBorderColor(color)
    setBubbleYouTextColor(color)
    setChatButtonColor(color)
    if (!isDarkMode){
      setBubbleYouBorderColor(color)
    }
  }

  const calculateLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
    const [rNorm, gNorm, bNorm] = [r, g, b].map((value) => value / 255);
    const [rCalc, gCalc, bCalc] = [rNorm, gNorm, bNorm].map((val) =>
      val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * rCalc + 0.7152 * gCalc + 0.0722 * bCalc;
  };

  const convertToRgba = (color:RGBAColor) => {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
  }

  const converToHex = (color:RGBAColor) => {
    const colors = [color.r, color.g, color.b];
    return colors.map(color => color.toString(16).padStart(2,'0')).join('')
  }

  
  const handleCopy = () => {
    const output = `--------기본테마 신청서--------
- 메인배경컬러: #${converToHex(mainBgColor)}
- 포인트컬러: #${converToHex(mainPointColor)}
- 구분선: #${converToHex(lineColor)}
- 아이콘색: #${converToHex(iconColor)}
- 아이콘종류: ${iconShape}
- 잠금화면배경: #${converToHex(passBgColor)}
- 잠금화면글자: #${converToHex(passcodeColor)}
- 채팅창배경: #${converToHex(chatBgColor)}
- 입력창배경: #${converToHex(chatInputColor)}
- 보내기버튼: #${converToHex(chatButtonColor)}
- 상대배경: ${convertToRgba(bubbleYouColor)}
- 상대테두리: ${convertToRgba(bubbleYouBorderColor)}
- 상대글씨: ${convertToRgba(bubbleYouTextColor)}
- 내 배경: ${convertToRgba(bubbleMeColor)}
- 내 테두리: ${convertToRgba(bubbleMeBorderColor)}
- 내 글씨: ${convertToRgba(bubbleMeTextColor)}

--------추가문의 사항--------
궁금한거나 추가 요청사항이 있다면 편하게 남겨주세요.`;
    navigator.clipboard.writeText(output);
    alert("컬러 데이터가 복사되었습니다!");
  };

  return (
    <div className="container">
      <div className="h1">
        kakaotalk.theme simulator
        <p className="twitter-link" onClick={() => window.open('https://x.com/3DA_theme')}>@3DA_theme</p>
      </div>
      <div className="content-container">
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
                <ChromePicker disableAlpha={true} color={mainBgColor} onChange={(color) => handleBackgroundPicker(color.rgb)}/>
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
                <ChromePicker disableAlpha={true} color={mainPointColor} onChange={(color) => handlePointColorPicker(color.rgb)}/>
              </div>
            )}
          </div>
        </div>
        <div className="preview-container">
          <div className="previews">
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="preview" 
              style={{ 
                backgroundImage: `url(${mainBackground})`,
                backgroundSize:'cover',
                backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})`,
                color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`
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
                  style={{borderBottom:`0.5px solid rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, 0.2)` }}
                >
                  <div className="image" style={{ backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})`}}>
                    <Star width="20px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 1)`}/>
                  </div>
                  <div className={`image-overlay ${isDarkMode ? 'dark' :''}`}/>
                  내 프로필
                </div>
                <div className="list" 
                  style={{borderBottom:`0.5px solid rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, 0.2)` }}
                >
                  <div className={`image`}/>
                </div>
                <div className="list" 
                  style={{borderBottom:`0.5px solid rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, 0.2)` }}
                >
                  즐겨찾기
                  <IoIosArrowDown />
                </div>
                <div className="list" 
                  style={{borderBottom:`0.5px solid rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, 0.2)` }}
                >
                  추천친구
                  <IoIosArrowDown />
                </div>
                <div className="list" 
                  style={{borderBottom:`0.5px solid rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, 0.2)` }}
                >
                  친구 10
                  <IoIosArrowDown />
                </div>
              </div>
              <div className="tabbar">
                {mainTabIcons.map((icon) => (
                  iconShape === 'circle' 
                    ? <Circle width="20px" 
                    fill={icon===1 ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} 
                    stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
                    : iconShape === 'star'
                    ? <Star width="20px" 
                    fill={icon===1 ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} 
                    stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
                    : iconShape === 'sparkle'
                    ? <Sparkle width="20px" 
                    fill={icon===1 ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} 
                    stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
                    : <Heart width="20px" 
                    fill={icon===1 ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} 
                    stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
                ))}
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div 
              className="preview"
              style={{ backgroundColor: `rgba(${passBgColor.r}, ${passBgColor.g}, ${passBgColor.b}, ${passBgColor.a})` 
              ,color: `rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})`
            }}>
              <div className="passcode">
                <div className="text">
                  <div className="title">암호 입력</div>
                  <div className="description">카카오톡 암호를 입력해 주세요.</div>
                </div>
                <div className="icons">
                {passcodeIcons.map((icon) => (
                  iconShape === 'circle' 
                    ? <Circle width="20px" 
                    fill={icon===1 ? `rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})` : 'transparent'} 
                    stroke={`rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})`}/>
                    : iconShape === 'star'
                    ? <Star width="20px" 
                    fill={icon===1 ? `rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})` : 'transparent'} 
                    stroke={`rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})`}/>
                    : iconShape === 'sparkle'
                    ? <Sparkle width="20px" 
                    fill={icon===1 ? `rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})` : 'transparent'} 
                    stroke={`rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})`}/>
                    : <Heart width="20px" 
                    fill={icon===1 ? `rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})` : 'transparent'} 
                    stroke={`rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})`}/>
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
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div 
              className="preview"
              style={{ 
                backgroundImage: `url(${chatBackground})`,
                backgroundSize:'cover',
                backgroundColor: `rgba(${chatBgColor.r}, ${chatBgColor.g}, ${chatBgColor.b}, ${chatBgColor.a})` 
            }}>
              <div>
                <div className="header">
                  <div style={{width:'36px', height:'16px'}}>
                    <IoIosArrowBack fill={isDarkMode? "white" : "black"}/>
                  </div>
                  <div className="title" style={{color:isDarkMode? "white" : "black"}}>채팅방</div>
                  <div className="icons">
                    <Search width='16px' stroke={isDarkMode? "white" : "black"}/>
                    <Hamburger width='16px' fill={isDarkMode? "white" : "black"}/>
                  </div>
                </div>

                <div className="dialogues">
                  <div className="dialogue left" style={{color: `rgba(${bubbleYouTextColor.r}, ${bubbleYouTextColor.g}, ${bubbleYouTextColor.b}, ${bubbleYouTextColor.a})`}}>
                    <div className="profile-image" style={{ backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})`}}>
                      <Star width="14px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 1)`}/>
                    </div>
                    <div className={`profile-overlay ${isDarkMode ? 'dark' :''}`}/>
                    <div className="bubble-container">
                      <div style={{color:isDarkMode? "white" : "black"}}>상대</div>
                      <div style={{position:'relative'}}>
                        <Bubble1 width='68px' 
                          fill={`rgba(${bubbleYouColor.r}, ${bubbleYouColor.g}, ${bubbleYouColor.b}, ${bubbleYouColor.a})`} 
                          stroke={`rgba(${bubbleYouBorderColor.r}, ${bubbleYouBorderColor.g}, ${bubbleYouBorderColor.b}, ${bubbleYouBorderColor.a})`}/>
                        <div style={{position:'absolute', zIndex:2, top:6, left:10, color: `rgba(${bubbleYouTextColor.r}, ${bubbleYouTextColor.g}, ${bubbleYouTextColor.b}, ${bubbleYouTextColor.a})`}}>Lorem ipsum</div>
                      </div>
                    </div>
                  </div>

                  <div className="dialogue right" style={{color: `rgba(${bubbleMeTextColor.r}, ${bubbleMeTextColor.g}, ${bubbleMeTextColor.b}, ${bubbleMeTextColor.a})`}}>
                    <div className="bubble-container">
                      <div style={{position:'relative'}}>
                        <Bubble1 width='68px' fill={`rgba(${bubbleMeColor.r}, ${bubbleMeColor.g}, ${bubbleMeColor.b}, ${bubbleMeColor.a})`}/>
                        <div style={{position:'absolute', zIndex:2, top:6, left:10}}>Lorem ipsum</div>
                      </div>
                    </div>
                  </div>

                  <div className="dialogue left" style={{color: `rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, ${mainPointColor.a})`}}>
                    <div className="profile-image" style={{ backgroundColor: `rgba(${mainBgColor.r}, ${mainBgColor.g}, ${mainBgColor.b}, ${mainBgColor.a})`}}>
                      <Star width="14px" fill={`rgba(${mainPointColor.r}, ${mainPointColor.g}, ${mainPointColor.b}, 1)`}/>
                    </div>
                    <div className={`profile-overlay ${isDarkMode ? 'dark' :''}`}/>
                    <div className="bubble-container">
                      <div style={{color:isDarkMode? "white" : "black"}}>상대</div>
                      <div style={{position:'relative'}}>
                        <Bubble2 width='150px' 
                          fill={`rgba(${bubbleYouColor.r}, ${bubbleYouColor.g}, ${bubbleYouColor.b}, ${bubbleYouColor.a})`} 
                          stroke={`rgba(${bubbleYouBorderColor.r}, ${bubbleYouBorderColor.g}, ${bubbleYouBorderColor.b}, ${bubbleYouBorderColor.a})`}/>
                        <div style={{position:'absolute', zIndex:2, top:6, left:10, color: `rgba(${bubbleYouTextColor.r}, ${bubbleYouTextColor.g}, ${bubbleYouTextColor.b}, ${bubbleYouTextColor.a})`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                      </div>
                      <div style={{position:'relative'}}>
                        <Bubble3 width='150px' 
                          fill={`rgba(${bubbleYouColor.r}, ${bubbleYouColor.g}, ${bubbleYouColor.b}, ${bubbleYouColor.a})`} 
                          stroke={`rgba(${bubbleYouBorderColor.r}, ${bubbleYouBorderColor.g}, ${bubbleYouBorderColor.b}, ${bubbleYouBorderColor.a})`}/>
                        <div style={{position:'absolute', zIndex:2, top:6, left:10, color: `rgba(${bubbleYouTextColor.r}, ${bubbleYouTextColor.g}, ${bubbleYouTextColor.b}, ${bubbleYouTextColor.a})`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                      </div>
                    </div>
                  </div>

                  <div className="dialogue right" style={{color: `rgba(${bubbleMeTextColor.r}, ${bubbleMeTextColor.g}, ${bubbleMeTextColor.b}, ${bubbleMeTextColor.a})`}}>
                    <div className="bubble-container right">
                      <div style={{position:'relative'}}>
                        <Bubble2 width='150px' 
                          stroke={`rgba(${bubbleMeBorderColor.r}, ${bubbleMeBorderColor.g}, ${bubbleMeBorderColor.b}, ${bubbleMeBorderColor.a})`}
                          fill={`rgba(${bubbleMeColor.r}, ${bubbleMeColor.g}, ${bubbleMeColor.b}, ${bubbleMeColor.a})`}/>
                        <div style={{position:'absolute', zIndex:2, top:6, left:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                      </div>
                      <div style={{position:'relative'}}>
                        <Bubble4 width='150px'
                          stroke={`rgba(${bubbleMeBorderColor.r}, ${bubbleMeBorderColor.g}, ${bubbleMeBorderColor.b}, ${bubbleMeBorderColor.a})`}
                          fill={`rgba(${bubbleMeColor.r}, ${bubbleMeColor.g}, ${bubbleMeColor.b}, ${bubbleMeColor.a})`}/>
                        <div style={{position:'absolute', zIndex:2, top:6, left:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium tempor fermentum.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-container"
                style={{backgroundColor: `rgba(${chatInputColor.r}, ${chatInputColor.g}, ${chatInputColor.b}, ${chatInputColor.a})`}}
              >
                <div className={`icon-container ${isDarkMode ? 'light' :'light'}`}>
                  <TbPlus />
                </div>
                <div className={`text-input ${isDarkMode? '': ''}`}>입력창</div>
                <div className="icon-container" style={{backgroundColor: `rgba(${chatButtonColor.r}, ${chatButtonColor.g}, ${chatButtonColor.b}, ${chatButtonColor.a})`}}>
                  <TbArrowUp color="white"/>
                </div>
              </div>
            </div>
          </div>
          
          <div className="image-upload">
            {mainBackground === null 
              ? <label className="button">
                <input
                  className="file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setMainBackground(URL.createObjectURL(file));
                  }}
                />
                <div>메인배경 이미지로 꾸미기</div>
              </label>
              : <div className="button" onClick={() => setMainBackground(null)}>
                <div>메인배경 이미지 지우기</div>
              </div>
            }
            {chatBackground === null 
              ? <label className="button">
                <input
                  className="file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setChatBackground(URL.createObjectURL(file));
                  }}
                />
                <div>채팅창 이미지로 꾸미기</div>
              </label>
              : <div className="button" onClick={() => setChatBackground(null)}>
                <div>채팅창 이미지 지우기</div>
              </div>
            }
          </div>
        </div>
        <div className="section-title">
            ✨조금 더 꾸미기
        </div>
        <div className="settings">
          <div className="setting">
            <div style={{position: 'relative'}}>
              <div 
              onClick={() => setLinePicker(!linePicker)} 
              className="setting-row">
              구분선
              <div
                className="color" style={{backgroundColor: `rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, ${lineColor.a})`}}/> 
              </div>
              {linePicker && (
                <div className="popover">
                  <div className="cover" onClick={() => setLinePicker(false)}/>
                  <ChromePicker disableAlpha={true} color={lineColor} onChange={(color) => setLineColor(color.rgb)}/>
                </div>
              )}
            </div>
            
            <div style={{position: 'relative'}}>
              <div 
                onClick={() => setIconPicker(!iconPicker)} 
                className="setting-row">
                아이콘 색
                <div
                  className="color" style={{backgroundColor: `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}}/>
              </div>
              {iconPicker && (
                <div className="popover">
                  <div className="cover" onClick={() => setIconPicker(false)}/>
                  <ChromePicker disableAlpha={true} color={iconColor} onChange={(color) => setIconColor(color.rgb)}/>
                </div>
              )}
            </div>
            
            <div className="setting-row">
              아이콘 종류
              <div className="shape-container">
                <Circle width='24px' onClick={()=> setIconShape('circle')} fill={iconShape==='circle' ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
                <Star width='24px' onClick={()=> setIconShape('star')} fill={iconShape==='star' ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
                <Sparkle width='24px' onClick={()=> setIconShape('sparkle')} fill={iconShape==='sparkle' ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
                <Heart width='24px' onClick={()=> setIconShape('heart')} fill={iconShape==='heart' ? `rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})` : 'transparent'} stroke={`rgba(${iconColor.r}, ${iconColor.g}, ${iconColor.b}, ${iconColor.a})`}/>
              </div>
              
            </div>
          </div>

          <div className="setting">
            <div style={{position: 'relative'}}>
              <div 
                  onClick={() => setPassBgPicker(!passBgPicker)} 
                  className="setting-row">
                잠금 화면 배경
                <div
                  className="color" style={{backgroundColor: `rgba(${passBgColor.r}, ${passBgColor.g}, ${passBgColor.b}, ${passBgColor.a})`}}/>
              </div>
              {passBgPicker && (
                <div className="popover">
                  <div className="cover" onClick={() => setPassBgPicker(false)}/>
                  <ChromePicker disableAlpha={true} color={passBgColor} onChange={(color) => setPassBgColor(color.rgb)}/>
                </div>
              )}
            </div>
            <div style={{position: 'relative'}}>
              <div 
                onClick={() => setPasscodePicker(!passcodePicker)} 
                className="setting-row">
                잠금 화면 글자
                <div
                  className="color" style={{backgroundColor: `rgba(${passcodeColor.r}, ${passcodeColor.g}, ${passcodeColor.b}, ${passcodeColor.a})`}}/>
              </div>
              {passcodePicker && (
                  <div className="popover">
                    <div className="cover" onClick={() => setPasscodePicker(false)}/>
                    <ChromePicker disableAlpha={true} color={passcodeColor} onChange={(color) => setPasscodeColor(color.rgb)}/>
                  </div>
                )}
            </div>
          </div>

          <div className="setting">
            <div style={{position: 'relative'}}>
              <div
                onClick={() => setChatBgPicker(!chatBgPicker)}  
                className="setting-row">
                채팅창 배경
                <div
                  className="color" style={{backgroundColor: `rgba(${chatBgColor.r}, ${chatBgColor.g}, ${chatBgColor.b}, ${chatBgColor.a})`}}/>      
              </div>
              {chatBgPicker && (
                <div className="popover">
                  <div className="cover" onClick={() => setChatBgPicker(false)}/>
                  <ChromePicker disableAlpha={true} color={chatBgColor} onChange={(color) => setChatBgColor(color.rgb)}/>
                </div>
              )}
            </div>
            <div style={{position: 'relative'}}>
              <div 
              onClick={() => setChatInputPicker(!chatInputPicker)} 
              className="setting-row">
                입력창 배경
                <div
                  className="color" style={{backgroundColor: `rgba(${chatInputColor.r}, ${chatInputColor.g}, ${chatInputColor.b}, ${chatInputColor.a})`}}/>
              </div>
              {chatInputPicker && (
                <div className="popover">
                  <div className="cover" onClick={() => setChatInputPicker(false)}/>
                  <ChromePicker disableAlpha={true} color={chatInputColor} onChange={(color) => setChatInputColor(color.rgb)}/>
                </div>
              )}
            </div>
            <div style={{position: 'relative'}}>
              <div
                onClick={() => setChatButtonPicker(!chatButtonPicker)}
                className="setting-row">
                보내기 버튼
                <div 
                  className="color" style={{backgroundColor: `rgba(${chatButtonColor.r}, ${chatButtonColor.g}, ${chatButtonColor.b}, ${chatButtonColor.a})`}}/>
              </div>
              {chatButtonPicker && (
                  <div className="popover">
                    <div className="cover" onClick={() => setChatButtonPicker(false)}/>
                    <ChromePicker disableAlpha={true} color={chatButtonColor} onChange={(color) => setChatButtonColor(color.rgb)}/>
                  </div>
                )}
            </div>
            <div className="setting-row" style={{marginTop:'10px'}}>
              <div className="setting-row half">{`<상대 말풍선>`}</div>
              <div className="setting-row half">{`<내 말풍선>`}</div>
            </div>
            <div className="setting-row">
              <div style={{position: 'relative'}}>
                <div 
                  onClick={() => setBubbleYouPicker(!bubbleYouPicker)} 
                  className="setting-row half">
                  배경
                  <div
                    className="color" style={{backgroundColor: `rgba(${bubbleYouColor.r}, ${bubbleYouColor.g}, ${bubbleYouColor.b}, ${bubbleYouColor.a})`}}/>
                </div>
                {bubbleYouPicker && (
                  <div className="popover">
                    <div className="cover" onClick={() => setBubbleYouPicker(false)}/>
                    <ChromePicker color={bubbleYouColor} onChange={(color) => setBubbleYouColor(color.rgb)}/>
                  </div>
                )}
              </div>
              <div style={{position: 'relative'}}>
                <div
                  onClick={() => setBubbleMePicker(!bubbleMePicker)}  
                  className="setting-row half">
                  배경
                  <div
                    className="color" style={{backgroundColor: `rgba(${bubbleMeColor.r}, ${bubbleMeColor.g}, ${bubbleMeColor.b}, ${bubbleMeColor.a})`}}/>
                </div>
                {bubbleMePicker && (
                  <div className="popover">
                    <div className="cover" onClick={() => setBubbleMePicker(false)}/>
                    <ChromePicker color={bubbleMeColor} onChange={(color) => setBubbleMeColor(color.rgb)}/>
                  </div>
                )}
              </div>
              
            </div>
            <div className="setting-row">
              <div style={{position: 'relative'}}>
                <div
                  onClick={() => setBubbleYouBorderPicker(!bubbleYouBorderPicker)}  
                  className="setting-row half">
                  테두리
                  <div
                    className="color" style={{backgroundColor: `rgba(${bubbleYouBorderColor.r}, ${bubbleYouBorderColor.g}, ${bubbleYouBorderColor.b}, ${bubbleYouBorderColor.a})`}}/>
                </div>
                {bubbleYouBorderPicker && (
                    <div className="popover">
                      <div className="cover" onClick={() => setBubbleYouBorderPicker(false)}/>
                      <ChromePicker color={bubbleYouBorderColor} onChange={(color) => setBubbleYouBorderColor(color.rgb)}/>
                    </div>
                  )}
              </div>
              <div style={{position: 'relative'}}>
                <div
                  onClick={() => setBubbleMeBorderPicker(!bubbleMeBorderPicker)}  
                  className="setting-row half">
                  테두리
                  <div
                    className="color" style={{backgroundColor: `rgba(${bubbleMeBorderColor.r}, ${bubbleMeBorderColor.g}, ${bubbleMeBorderColor.b}, ${bubbleMeBorderColor.a})`}}/>
                </div>
                {bubbleMeBorderPicker && (
                  <div className="popover">
                    <div className="cover" onClick={() => setBubbleMeBorderPicker(false)}/>
                    <ChromePicker color={bubbleMeBorderColor} onChange={(color) => setBubbleMeBorderColor(color.rgb)}/>
                  </div>
                )}
              </div>
            </div>
            <div className="setting-row">
              <div style={{position: 'relative'}}>
                <div
                  onClick={() => setBubbleYouTextPicker(!bubbleYouTextPicker)}  
                  className="setting-row half">
                  글자색
                  <div
                    onClick={() => setBubbleYouTextPicker(!bubbleYouTextPicker)} 
                    className="color" style={{backgroundColor: `rgba(${bubbleYouTextColor.r}, ${bubbleYouTextColor.g}, ${bubbleYouTextColor.b}, ${bubbleYouTextColor.a})`}}/>
                </div>
                {bubbleYouTextPicker && (
                  <div className="popover">
                    <div className="cover" onClick={() => setBubbleYouTextPicker(false)}/>
                    <ChromePicker color={bubbleYouTextColor} onChange={(color) => setBubbleYouTextColor(color.rgb)}/>
                  </div>
                )}
              </div>
              <div style={{position: 'relative'}}>
                <div
                  onClick={() => setBubbleMeTextPicker(!bubbleMeTextPicker)}  
                  className="setting-row half">
                  글자색
                  <div
                    className="color" style={{backgroundColor: `rgba(${bubbleMeTextColor.r}, ${bubbleMeTextColor.g}, ${bubbleMeTextColor.b}, ${bubbleMeTextColor.a})`}}/>
                </div>
                {bubbleMeTextPicker && (
                  <div className="popover">
                    <div className="cover" onClick={() => setBubbleMeTextPicker(false)}/>
                    <ChromePicker color={bubbleMeTextColor} onChange={(color) => setBubbleMeTextColor(color.rgb)}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-title">
              이대로 테마를 만들고 싶다면?
          </div>
          <div className="section">
            <div className="section-box">
              <div className="text-container">
                <div className="main-text" >1. 테마 편집 내용 복사하기</div>
                <div className="sub-text">편집한 내용을 담은 코드가 복사됩니다</div>
              </div>
              <div className="button" onClick={handleCopy}>🔗코드 복사</div>
            </div>
            <div className="section-box">
              <div className="text-container">
                <div className="main-text" >2. 삼다 오픈채팅방에 신청서 보내기</div>
                <div className="sub-text">복사된 내용만 보내도 무관하나, 이미지를 사용하실 경우 파일을 함께 전송해주세요.</div>
              </div>
              <div className="button" onClick={() => window.open('https://open.kakao.com/me/3dasu_com')} >{`⭐신청하러 가기 `}</div>
            </div>
            <div className="section-box">
              <div className="text-container">
                <div className="main-text" >3. 결제 후 테마 기다리기</div>
                <div className="sub-text">24시간 이내 받아보실 수 있습니다.</div>
              </div>
            </div>
            <div className="section-box">
              <div className="text-container">
                <div className="main-text" >더 많은 테마가 궁금하다면?</div>
              </div>
                <div className="button" onClick={() => window.open('https://www.postype.com/@3dasu-com')} >{`🔍포스타입 구경하기`}</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ColorPickerPage;
