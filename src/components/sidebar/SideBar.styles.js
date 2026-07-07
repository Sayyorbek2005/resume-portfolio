import styled from 'styled-components'

export const SidebarContainer = styled.div`
    position: fixed;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;

    /* Mobil tugma oddiy holatda ko'rinmaydi */
    .menu-toggle {
        display: none;
    }

    ul > li {
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
       
        /* Siz yozgan kod xatosi to'g'rilandi (&hover emas &:hover) */
        &:hover {
            background-color: var(--primary);
        }
        
        svg {
            color: var(--white);
            font-size: 25px;
        }

        span {
            font-size: 5px;
            height: 20px;
            width: 20px;
            position: absolute;
            z-index: -1;
            left: 10px;
            background-color: var(--primary);
            color: var(--white);
            border-radius: 35px;
            padding: 5px;
            transition: all .3s ease;
        }

        &:hover > svg {
            color: var(--white);
        }

        &:hover span {
            width: 190px;
            height: 50px;
            padding: 5px 60px 5px 15px;
            font-size: 26px;
            left: -145px;
        }
    }

    /* RESPONSIVE DIZAYN */
    @media (max-width: 768px) {
        // Sidebarni markazdan teparoqqa moslaymiz (ochilganda pastga joy qolishi uchun)
        top: 300px;
        transform: translateY(0);

        .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary);
            color: var(--white);
            border: none;
            outline: 1.5px solid var(--white);
            font-size: 28px;
            cursor: pointer;
            box-shadow: 0px 0px 50px -25px var(--primary);
            position: relative;
            z-index: 1000;
        }

        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
            
            /* Animatsiya effektlari */
            opacity: ${props => props.$isOpen ? '1' : '0'};
            visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
            transform: ${props => props.$isOpen ? 'translateY(10px)' : 'translateY(-20px)'};
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    }
`