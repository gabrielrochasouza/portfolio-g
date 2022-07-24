import { Container } from "./style"
import {useState} from 'react'


const ContactSection = ()=>{
    const [subject, setSubject] = useState('') 
    return(
        <Container id="contato">
            <span>Envie um email</span>
            <h3>Entre em Contato</h3>
            <p>Preencha o formulário caso queira me enviar uma mensagem por email</p>
            <form action="https://formsubmit.co/grsouza135@gmail.com" method="POST">
                <div className="input-group">
                    <input placeholder=" " required type="text" name="name" className="input"/>
                    <label className="user-label">Nome<span>*</span></label>
                </div>
                <div className="input-group">
                    <input placeholder=" "  required type="email" name="email" className="input"/>
                    <label className="user-label">Email<span>*</span></label>
                </div>
                <div className="input-group">
                    <input placeholder=" "  onChange={(e)=>setSubject(e.target.value)} required type="text" name="subject" className="input"/>
                    <label className="user-label">Assunto<span>*</span></label>
                </div>
                <div className="input-group">
                    <textarea placeholder=" "  required name="description" className="input" id=""></textarea>
                    <label className="user-label">Mensagem<span>*</span></label>
                </div>

                <input type="hidden" name="_subject" value={subject}></input>
                <input type="hidden" name="_template" value="table"></input>
                
                <button type="submit">Enviar</button>
            </form>
            
        </Container>
    )
}

export default ContactSection