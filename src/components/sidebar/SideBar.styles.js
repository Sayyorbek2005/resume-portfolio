import styled from 'styled-components'

export const SidebarContainer = styled.div`

    position: fixed;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);



    ul > li{
        position: relative;
        margin: 10px 0px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease;
         box-shadow: 0px 0px 50px -25px var(--primary);
            outline: 1.5px solid var(--white);
       
            &hover {
                background-color: var(--primary);
                
            }
            
            svg{
            color: var(--white);
            font-size: 25px;
        }

        span{
            font-size: 5px;
            height: 20px;
            width: 20px;
            position: absolute;
            z-index: -1;
            left: 10px;
            background-color: var(--primary);
            color: var(--white);
            /* border: 1px solid black; */
            border-radius: 35px;
            padding: 5px;
            transition: all .3s ease;
            
        }



        &hover > svg{
            color: var(--white);
        }


        &:hover span{
            width: 190px;
            height: 50px;
            padding: 5px 60px 5px 15px;
            font-size: 26px;
            left: -145px;

        }

    }

`