import Container from "../components/Container";
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import User from '../components/User';
import {Context} from "react";

const Home = (props: any) => (
		<Container>
			<Head>
				<title>Next.js | Users </title>
			</Head>
			<div>
				<h1></h1>
				<User users={props.users}/>
			</div>
		</Container>
)

// Fetch external API and stores the result
// in Home.props
Home.getInitialProps = async (ctx: Context<any>) => {
	const response = await fetch("https://reqres.in/api/users");
	const responseInJSON = await response.json();
	return {
		users: responseInJSON.data,
	}
}

export default Home;
