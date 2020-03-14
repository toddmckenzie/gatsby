import React from "react"
import Tours from './tours.js';
import { Link } from 'gatsby';
import Layout from '../components/Layout';


export default () => 
<div>
    <Layout>
        <h1>Hello!</h1>
        <Tours />
        <Link to="/tours">Tours</Link>
    </Layout>
    
</div>

