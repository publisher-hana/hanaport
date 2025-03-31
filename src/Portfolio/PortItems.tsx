import portData from 'data/index';
import { PortInfo, PortFigure, PortItemsStyle } from './portfolio.style';

export default function PortItems({ activeFilter }: { activeFilter: string }) {
    // activeFilter에 따라 포트폴리오 항목을 필터링
  const filteredData = activeFilter === "All"
  ? portData // "All"이면 모든 항목을 표시
  : portData.filter(item => {
    // "pc" 또는 "mobile"에 해당하는 데이터만 필터링  
    if (activeFilter.toLowerCase() === "pc") {
      return item.device.toLowerCase() === "pc";
    } else if (activeFilter.toLowerCase() === "mobile") {
      return item.device.toLowerCase() === "mobile";
    } else if (activeFilter.toLowerCase() === "pc/mobile") {
      return item.device.toLowerCase() === "pc/mobile";
    } else if (activeFilter.toLowerCase() === "responsive") {
      return item.device.toLowerCase() === "responsive";
    }
    return false; // 그 외의 경우는 필터링하지 않음
  });
    return(  
        <PortItemsStyle className="fadeInUp animated s1_8">
            {/* 필터링된 데이터를 사용하여 항목 렌더링 */}
            {filteredData.map((item, index) => (
                <li key={index} data-aos="fade-up">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <PortFigure className={item.only_mb_img ? 'only_mb_img' : ''}>
                          {item.pc_img && <img src={item.pc_img} alt={item.alt} />}
                          {item.mb_img && (
                              <span className='mb_img'>
                              <img src={item.mb_img} alt={item.alt} />
                              </span>
                          )}
                          {item.only_mb_img && <img src={item.only_mb_img} alt={item.alt} />}
                      </PortFigure>
                      <PortInfo>
                          <h3><span>{item.title}</span></h3>
                          <ul className="info">
                            <li className='text-upper'>{item.device}</li>
                            <li>{item.skill}</li>
                            <li>{item.date}</li>
                          </ul>
                      </PortInfo>
                    </a>
                </li>
            ))}
        </PortItemsStyle>
    )
}