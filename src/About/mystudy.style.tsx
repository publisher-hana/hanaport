import styled from '@emotion/styled'

export const MyStudyStyle =styled.div`
  .swiper-slide{
    overflow:hidden;
  }
`
export const Study = styled.div`
  .swiper{
    padding-bottom:58px;
  }
  .swiper-pagination{
    width:40%;
    top:auto;
    bottom:0px;
    left:50%;
    margin-left:-20%;
    background:#eee;
  }
`

export const Box = styled.a`
  display:block;
  .img{
    width:800px;
    height:600px;
    margin:0 auto;
    img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
  }
  dl{
    margin-top:10px;
    color:#fff;
    font-size:1.2rem;
    line-height:1.2;
  }
  
`