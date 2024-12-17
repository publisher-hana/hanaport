import { useEffect, useState } from "react";
import { Progress, TabListStyle } from "./portfolio.style";
import { SecTittle, Section } from "styles/common.style";
import PortItems from "./PortItems";
const tabData = [
    "All",
    "PC",
    "PC/Mobile",
    "Mobile",
    "Responsive"
  ];/* 이 데이터를 사용하여 탭 목록을 동적으로 생성할 컴포넌트(TabList)를 만듬 */


export const Portfolio = () => {
    const [progressBarWidth, setProgressBarWidth] = useState(0); // 프로그레스 바 너비 상태
    const [activeTab, setActiveTab] = useState(tabData[0]);
    useEffect(() => {
        const firstLiElement = document.querySelector('.tab_list li:first-child');
        if (firstLiElement) {
            firstLiElement.classList.add('on');
        }
        
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', updateProgressBarWidth);

        // 컴포넌트가 마운트된 후 스크롤 위치에 따른 초기 프로그레스 바 너비 설정
        updateProgressBarWidth();

        // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', updateProgressBarWidth);
        };

    }, []); 
     // 스크롤 이벤트 핸들러
     const updateProgressBarWidth = () => {
        const wins = window.scrollY;
        const hei = document.documentElement.scrollHeight;
        const hei2 = window.innerHeight;
        const height = hei - hei2;
        const bar = (wins / height) * 100;

        // 프로그레스 바 너비 상태 업데이트
        setProgressBarWidth(bar);
    };
    const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, tab: string) => {

        // 클릭한 탭으로 활성 탭 변경
         setActiveTab(tab);
 
         // 현재 'on' 클래스를 가진 탭의 클래스를 제거합니다.
         const currentOnTab = document.querySelector('.tab_list li.on');
         if(currentOnTab)
         currentOnTab.classList.remove('on');
 
         // 클릭한 탭에 'on' 클래스를 추가합니다.
         const clickedTab = e.target as HTMLButtonElement; // 클릭한 버튼을 선택합니다.
         if (clickedTab.parentElement) clickedTab.parentElement.classList.add('on');
     };
    
    return (
        <main>
             <Progress>
                <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
            </Progress>
            <Section port={true}>
                <SecTittle>PORTFOLIO</SecTittle>
                <TabListStyle className="tab_list fadeInUp animated s1_4">
                    {tabData.map((tab) => (
                    <li
                        key={tab}
                        className={activeTab === tab ? 'on' : ''}
                    >
                        <button onClick={(e) => handleTabClick(e, tab)}>{tab}</button>
                    </li>
                    ))}
                </TabListStyle>
                <PortItems activeFilter={activeTab} />
            </Section>
        </main>
    );
};