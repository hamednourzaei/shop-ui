import { useEffect, useState } from 'react';
import "./searchPage.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import { TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import configProducts from '../../../config/configProducts';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Filters from '../../../Components/Filters/Filters';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import configBrands from '../../../config/configBrands';
import configCategory from '../../../config/configCategory';

const SearchPage = () => {
    const navigate = useNavigate();
    const { data: products, isError, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: configProducts
    });

    const { data: brands } = useQuery({
        queryKey: ["Brands"],
        queryFn: configBrands
    });

    const { data: Category } = useQuery({
        queryKey: ["Category"],
        queryFn: configCategory
    })

    const [activeItem, setActiveItem] = useState('مرتبط‌ ترین');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [priceRange, setPriceRange] = useState({
        min: '0',
        max: "0"
    });

    useEffect(() => {
        if (isError) {
            navigate('/Error');
        }
    }, [isError, navigate]);

    useEffect(() => {
        if (products) {
            applyFilters(products, searchQuery, selectedBrands, activeItem, selectedCategory, priceRange);
        }
    }, [products, searchQuery, selectedBrands, activeItem, selectedCategory, priceRange]);

    const applyFilters = (products, searchTerm, brands, sortType, Category) => {
        let result = [...products];

        if (searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.type.e?.toLowerCase()?.includes(searchTerm) ||
                product.type.f?.toLowerCase()?.includes(searchTerm) ||
                product.brand?.toLowerCase()?.includes(searchTerm)
            );
        }

        if (brands.length > 0) {
            result = result.filter(product =>
                brands.includes(product.brand)
            );
        }

        if (Category.length > 0) {
            result = result.filter(product =>
                Category.includes(product.type.f)
            )
        }

        const minPrice = parseInt(priceRange.min) || 0;
        const maxPrice = parseInt(priceRange.max) || Infinity;

        result = result.filter(product =>
            product.Price >= minPrice &&
            product.Price <= maxPrice
        );


        if (sortType === 'گران‌ترین') {
            result.sort((a, b) => b.Price - a.Price);
        } else if (sortType === 'ارزان‌ ترین') {
            result.sort((a, b) => a.Price - b.Price);
        }


        setFilteredProducts(result);
    };


    function handleSearch(e) {
        setSearchQuery(e.target.value.toLowerCase());
    }

    const handleSort = (item) => {
        setActiveItem(item);
    };

    if (isLoading) {
        return <div className='Loading'><CircularProgress size="4rem" /></div>;
    }

    return (
        <div className='SearchPage'>
            <div className='bestAndProducts'>
                <div className='serachAbest'>
                    <div className='serach'>
                        <TextField
                            onChange={handleSearch}
                            placeholder='search'
                        />
                    </div>
                    <div className='best'>
                        <ul>
                            {['ارزان‌ ترین', 'گران‌ترین', 'مرتبط‌ ترین'].map((item) => (
                                <li
                                    key={item}
                                    className={activeItem === item ? 'active' : ''}
                                    onClick={() => handleSort(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <span>:مرتبط‌ سازی<FilterListIcon /></span>
                    </div>
                </div>
                <ul className='Products' dir='rtl'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))
                    ) : (
                        <li className='no-products-message'>
                            <p>محصولی یافت نشد.</p>
                        </li>
                    )}
                </ul>
            </div>
            <Filters
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                brands={brands || []}
                Category={Category || []}
                setPriceRange={setPriceRange}
                priceRange={priceRange}
            />
        </div>
    );
};

export default SearchPage;