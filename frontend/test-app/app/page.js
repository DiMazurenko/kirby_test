import ProductCard from './components/ProductCard/ProductCard';
import styles from './page.module.css'
import SubscribeForm from '@/app/components/Form/Form';

const HomePage = () => {

	const products = [
		{ id: 1, title: 'Товар 1', description: 'Описание 1', imageUrl: '/path/to/image1.jpg' },
		{ id: 2, title: 'Товар 2', description: 'Описание 2', imageUrl: '/path/to/image2.jpg' },
		{ id: 3, title: 'Товар 3', description: 'Описание 3', imageUrl: '/path/to/image3.jpg' }
	];

	return (
		<section className={styles.section}>
			<h1>Главная страница</h1>
			<div className={styles.cards}>
				{products.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
			<div>
				<SubscribeForm />
			</div>
		</section>

	);
};

export default HomePage;