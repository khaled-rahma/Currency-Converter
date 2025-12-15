# Currency-Converter
Responsive Currency Converter
# **Currency Converter Project**

## **Project Overview**
A clean, responsive web application that converts currencies in real-time using live exchange rates from the **ExchangeRate-API**.

## **Key Features**
- **Real-Time Conversion**: Fetches live exchange rates from a reliable API
- **8+ Currencies**: Convert between USD, EUR, GBP, INR, JPY, AUD, CAD, DZD
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **User-Friendly**: Simple interface with instant calculations
- **No Installation**: Runs directly in any modern web browser

## **How It Works**
1. **Select** a "From" currency from the first dropdown
2. **Enter** an amount in the input field
3. **Select** a "To" currency from the second dropdown
4. **See** the converted amount instantly appear
5. **View** the current exchange rate below

## **Technical Details**
- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **API**: ExchangeRate-API (free tier with API key included)
- **Responsive Design**: Uses CSS media queries for all screen sizes
- **Architecture**: Single-page application with clean separation of concerns

## **File Structure**
- **`index.html`** - Main HTML structure
- **`style.css`** - Complete styling with responsive breakpoints
- **`script.js`** - JavaScript for API calls and DOM manipulation

## **Responsive Breakpoints**
- **Desktop**: >1024px (45% container width)
- **Tablet**: 768px-1024px (60-85% container width)
- **Mobile**: <768px (75-95% container width, stacked layout)
- **Landscape**: Special handling for mobile landscape mode

## **Live Demo**
Simply open `index.html` in any web browser - no build process or dependencies required!

## **Development Notes**
- Uses `fetch()` API for asynchronous data fetching
- Implements event listeners for real-time updates
- Includes error handling for API responses
- Follows mobile-first responsive principles

**A practical, production-ready currency converter built with vanilla JavaScript.**
