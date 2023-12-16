import {
  Container,
  Heading,
  FullFrame,
  Cont,
  StyledName,
  StyledValue,
} from './DailyGoal.styled';

export default function DailyGoal() {
  return (
    <Container>
      <Heading>Daily Goal</Heading>
      <FullFrame>
        <Cont>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z"
              stroke="#45FFBC"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z"
              stroke="#45FFBC"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z"
              stroke="#45FFBC"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
          <div>
            <StyledName>Calories</StyledName>
            <StyledValue>1700</StyledValue>
          </div>
        </Cont>
        <Cont>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z"
              stroke="#B6C3FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z"
              stroke="#B6C3FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 53.3333V50"
              stroke="#B6C3FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 49.9334V46.6001"
              stroke="#B6C3FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z"
              stroke="#B6C3FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <StyledName>Water</StyledName>
            <StyledValue>
              1500 <span>ml</span>
            </StyledValue>
          </div>
        </Cont>
      </FullFrame>
    </Container>
  );
}
