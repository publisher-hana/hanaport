
export const Popup = () => {
  return (
     <>
           <div className="cover"></div>
            <div className="layer">
              <button className="close">닫기</button>
              <h2>MY TRACE</h2>
              <div className="cont">
                <h3>자바스크립트로 리퀘스트 보내기</h3>
                <p>fetch함수와 axios사용, 페이지를 새로고침하지 않고 서버로부터 데이터를 비동기적으로 가져올 수 있습니다. <br/>이를 통해 좋아요 버튼 클릭 시 실시간으로 반응을 보이거나, 사용자가 페이지를 아래로 스크롤할 때 새로운 콘텐츠를 자동으로 로딩하는 기능을 구현할 수 있습니다.</p>
                <pre>
                  <div className="code_box">
                    <div className="header"><span>code</span></div>
                    <div className="code">
                      <code className="javascript">
                        const res = await fetch(&quot;https://learn.codeit.kr/api/color-surveys&quot;);
                        <br/>const data = await res.json();
                        <br/>const &#123; results &#125; = data;
                        <br/>const survey = results&#91;1&#93;;
                        <br/>const &#123; id, mbti, colorCode, createdAt, updatedAt &#125; = survey;
                        <br/>console.log(id, mbti, colorCode, createdAt, updatedAt);
                      </code>
                      
                    </div>
                  </div>
                </pre>
              </div>
              
            </div>

     </>
  )
}