import React, { useState } from 'react'
import "./login.css"

export function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async(e: any) => {
        try {
            e.preventDefault();
            let form_data = {
                'user_name': email,
                'user_password': password
            }
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: new URLSearchParams(form_data)
            });
            const result = await response.json();
            if(result.errores){
                alert(result.errores[0].msg);
                return;
            }
            if(result.error){
                alert(result.error);
                return;
            }
            console.log(result);
            localStorage.setItem("nombre", result.user.user_name);
        localStorage.setItem("nombre", result.user.nombre);
        localStorage.setItem("user_email", result.user.user_email);
        localStorage.setItem("token", result.token);
        localStorage.setItem("session_id", result.user.session_id);
        localStorage.setItem("loged", "true");       
        localStorage.setItem("user_id", result.user.user_id);       
        window.location.href="/dashboard";
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <form>
        <div>
            <label className='titulo_email'>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSubmit} type="submit">Iniciar Sesión</button>
    </form>
  )
}
