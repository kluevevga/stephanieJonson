import styled from 'styled-components';
import img from '../../../../assets/images/image2.jpg';


export const GalleryContainer = styled.div`
    padding-top: 70px;
    padding-bottom: 80px;
    background: no-repeat center/cover linear-gradient(#2F3438FA, #2F3438FA), url(${img});

    h2 {
        color: white;
    }

    .cards {
        margin: 30px auto 0;
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 240px));
        justify-content: center;
        grid-gap: 10px;

        img {
            width: 100%;
            border-radius: 5px;
            object-fit: cover;
            box-shadow: 0 15px 30px 5px #00000040;
        }
    }

    .col {
        display: grid;
        grid-template-rows: repeat(3, auto);
        align-content: center;
        grid-row-gap: 10px;

        &:first-of-type {
            img {
                &:first-of-type {
                    height: min(62.5vw, 312px);
                }

                &:nth-of-type(2) {
                    height: min(34.5vw, 172px);
                }

                &:last-of-type {
                    height: min(48.5vw, 242px);
                }
            }
        }

        &:last-of-type {
            img {
                &:first-of-type,
                &:nth-of-type(2) {
                    height: min(50vw, 250px);
                }

                &:last-of-type {
                    height: min(59vw, 295px);
                }
            }
        }
    }

    .button-sqr {
        margin: 40px auto 0;
        width: 187px;
        height: 53px;
    }

    @media screen and (min-width: 576px) {
        .cards {
            grid-gap: 15px;
        }

        .col {
            grid-row-gap: 15px;
        }
    }

    @media screen and (min-width: 768px) {
        padding-top: 100px;

        .cards {
            grid-template-columns: repeat(4, 1fr);
        }
        
        .col {
            grid-template-rows: repeat(2, auto);
            align-content: center;

            &:first-of-type {
                img {
                    &:first-of-type {
                        height: 38vw;
                    }
                }
            }

            &:nth-of-type(2) {
                img {
                    height: 21vw;
                }
            }

            &:nth-of-type(3) {
                img {
                    &:first-of-type {
                        height: 14.5vw;
                    }

                    &:nth-of-type(2) {
                        height: 20.5vw;
                    }
                }
            }

            &:last-of-type {
                img {
                    &:first-of-type {
                        height: 29vw;
                    }

                    &:nth-of-type(2) {
                        height: 22.5vw;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .cards {
            padding: 0 50px;
        }

        .col {
            &:first-of-type {
                img {
                    &:first-of-type {
                        height: min(26vw, 500px);
                    }
                }
            }

            &:nth-of-type(2) {
                img {
                    height: min(14vw, 269px);
                }
            }

            &:nth-of-type(3) {
                img {
                    &:first-of-type {
                        height: min(10vw, 192px);
                    }

                    &:nth-of-type(2) {
                        height: min(13.5vw, 260px);
                    }
                }
            }

            &:last-of-type {
                img {
                    &:first-of-type {
                        height: min(19vw, 365px);
                    }

                    &:nth-of-type(2) {
                        height: min(15vw, 288px);
                    }
                }
            }
        }
    }
`;