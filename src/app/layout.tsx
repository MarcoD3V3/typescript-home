import './globals.css';
import styles from './layout.module.scss';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'TypeScript',
	description: 'Generated by create next app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='es'>
			<body className={inter.className}>
				<div className={styles.children}>
					{children}
				</div>
			</body>
		</html>
	);
}

