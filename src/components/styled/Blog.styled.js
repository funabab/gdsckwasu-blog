import styled from 'styled-components'

const Blog = styled.section`
  & h1,
  h2 {
    color: #0f9d58;
  }

  & h1 {
    font-size: 1.5rem;
  }
  & h2 {
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
  }
  & .blog--cover-image {
    width: 100%;
    height: 300px;
    position: relative;
  }

  & .blog--cover-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .blog--social-wrapper {
    margin-top: 1rem;
  }
  & .blog--social-wrapper span {
    color: #797979;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  & .blog--social-icons {
    display: flex;
    gap: 1rem;
  }
  & .blog--social-icons a {
    color: #0f9d58;
    border: 1px solid #0f9d58;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem;
    width: 34px;
    heigth: 34px;
  }

  & .blog--content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }

  & .blog--tag {
    padding: 1rem 0;
  }

  // the html tags(div, p and img) here can be seen on the markup in the browser dev tools
  & article div {
    margin: 1.5rem 0;
  }
  & article div p {
    font-size: 1.125rem;
    margin-bottom: 1.2rem;
    color: #4d4d4d;
  }
  & article img {
    width: 100%;
  }

  & article .blog--author {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  & article .blog--author img {
    width: 50%;
    max-width: 120px;
  }
  & article .blog--author span {
    color: #4d4d4d;
  }

  // RESPONSIVENESS
  @media only screen and (min-width: 1000px) {
    & h1 {
      font-size: 4rem;
    }
    & h2 {
      font-size: 2.2rem;
    }
    & .blog--cover-image {
      height: 500px;
    }
    & article div p {
      font-size: 1.4rem;
    }
  }

  @media only screen and (min-width: 768px) {
    & h1 {
      font-size: 3rem;
    }
    & h2 {
      font-size: 2rem;
    }

    & .blog--cover-image {
      width: 83.2%;
      margin: 0 auto;
      height: 400px;
      max-width: 1440px;
    }

    & .blog--social-icons {
      flex-direction: column;
      gap: 3rem;
    }

    & .blog--social-wrapper {
      margin-top: 0;
    }

    & .blog--content {
      // padding: 1rem;
      flex-direction: row;
      width: 80%;
      max-width: 1300px;
      margin: 3rem auto;
      gap: 4rem;
    }

    & article div {
      margin: 2.5rem 0;
    }
    & article div p {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      line-height: 33px;
    }

    & article .blog--author {
      width: 50%;
    }
    & article .blog--author span {
      font-size: 1.1rem;
      color: #4d4d4d;
    }
  }
`

export default Blog
