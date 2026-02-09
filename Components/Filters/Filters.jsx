import {  useState } from 'react';
import "./Filters.css";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox,
    FormControlLabel,
    Typography,
    TextField
} from '@mui/material';
import { ArrowDropDownCircleOutlined } from '@mui/icons-material';

const Filters = ({ selectedBrands, setSelectedBrands, brands, Category, selectedCategory, setSelectedCategory, priceRange, setPriceRange }) => {
    const [expandedBrand, setExpandedBrand] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState(false);
    const [expandedprice, setExpandedprice] = useState(false);


    const handleBrandChange = (brand) => {
        setSelectedBrands(prevSelected =>
            prevSelected.includes(brand)
                ? prevSelected.filter(b => b !== brand)
                : [...prevSelected, brand]
        );
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(prevSelected =>
            prevSelected.includes(category)
                ? prevSelected.filter(b => b !== category)
                : [...prevSelected, category]
        );
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        const englishNumbers = value.replace(/[^۰-۹0-9]/g, '')
            .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
        setPriceRange(prev => ({
            ...prev,
            [name]: englishNumbers
        }));
    };

    const formatPrice = (price) => {
        if (!price || price === '') return 'NaN';
        const num = parseInt(price.toString().replace(/,/g, ''));
        return isNaN(num) ? '' : new Intl.NumberFormat('fa-IR').format(num);
    };


    return (
        <div className='filters'>
            <h3 className='filtersTitle'>فیلتر ها</h3>
            <Accordion
                dir="rtl"
                expanded={expandedBrand}
                onChange={() => setExpandedBrand(!expandedBrand)}
                sx={{ boxShadow: 'none' }}
                className='Accordion'
            >
                <AccordionSummary
                    expandIcon={<ArrowDropDownCircleOutlined />}
                    aria-controls="brands-content"
                >
                    <Typography className='Accordion-title'>برند</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {brands.map((brand) => (
                        <FormControlLabel
                            key={brand.id}
                            control={
                                <Checkbox
                                    checked={selectedBrands.includes(brand.name)}
                                    onChange={() => handleBrandChange(brand.name)}
                                />
                            }
                            label={brand.name}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion
                dir="rtl"
                expanded={expandedCategory}
                onChange={() => setExpandedCategory(!expandedCategory)}
                sx={{ boxShadow: 'none' }}
                className='Accordion'
            >
                <AccordionSummary
                    expandIcon={<ArrowDropDownCircleOutlined />}
                    aria-controls="brands-content"
                >
                    <Typography className='Accordion-title'>دسته بندی </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {Category.map((category) => (
                        <FormControlLabel
                            key={category.id}
                            control={
                                <Checkbox
                                    checked={selectedCategory.includes(category.name)}
                                    onChange={() => handleCategoryChange(category.name)}
                                />
                            }
                            label={category.name}

                        />
                    ))
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion
                dir="rtl"
                expanded={expandedprice}
                onChange={() => setExpandedprice(!expandedprice)}
                sx={{ boxShadow: 'none' }}
                className='Accordion'
            >
                <AccordionSummary
                    expandIcon={<ArrowDropDownCircleOutlined />}
                    aria-controls="brands-content"
                >
                    <Typography className='Accordion-title'>قیمت</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='filterPriceContiner'>
                        <div className='boxFilterPrice'>
                            <p>محدوده قیمت از</p>
                            <TextField
                                name="min"
                                value={formatPrice(priceRange.min)}
                                onChange={handlePriceChange}
                                className='InputFillterPrice'
                            />
                        </div>
                        <div className='boxFilterPrice'>
                            <p>محدوده قیمت تا</p>
                            <TextField
                                name="max"
                                value={formatPrice(priceRange.max)}
                                onChange={handlePriceChange}
                                className='InputFillterPrice'
                            />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Filters;