import styles from '@/styles/Components/Main/about.module.scss'

import { useEffect, useRef } from 'react';
import NextStage from '../Global/Objects/nextStage';
import ContactMeButton from '../Global/Objects/contactButton';

import Link from 'next/link';

interface Props {
    id:string, 
    scollFunction:Function, 
    about:string}

function About({id, scollFunction, about}:Props) {
    const elementRef = useRef<HTMLDivElement>(null);

    function scroll_move(element:HTMLDivElement|null){
        if (element === null){
            return
        }

        if(element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom>0){
            const percentage = 1 - (element.getBoundingClientRect().bottom / (window.innerHeight + element.getBoundingClientRect().height))
            const left_space = -100 + ((element?.parentElement as HTMLElement).getBoundingClientRect().width + 100 + element.getBoundingClientRect().width)*percentage
            // od -100px do 100% + 100px + width
            element.style.left = `${left_space}px`
        }
    }

    useEffect(() => {
        const element = elementRef.current;
        const handleScroll = () => {
            scroll_move(element);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div id={id} className={styles.container}>
            <div className={styles.backround_name}>
                <h1 ref={elementRef}>
                    O Mně
                </h1>
            </div>

            <div className={styles.content}>
                <p>
                     <span dangerouslySetInnerHTML={{ __html: about.replace("\n", "<br/> <br/>") }}></span><Link href="/404">.</Link>
                </p>
                <ContactMeButton scroll={scollFunction} time={1600} />
            </div>
            <NextStage name='Moje tvorba' scroll={scollFunction} to="CaseStudy" time={800} />
        </div>
    );
}

export default About;