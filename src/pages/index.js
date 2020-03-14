import React from "react"
import Tours from './tours.js';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./layout.css";

export default () => 
<div>
    <Layout>
        <h1>Hello!</h1>
        <div className="container">
            <div className="row">
                <div className="col-4">Hello</div>
                <div className="col-4">Hello</div>
                <div className="col-4">Hello</div>
            </div>
        </div>
        <Link to="/tours">Tours</Link>
    </Layout>
    
</div>

