import Home from './components/Home';
import Gift from './components/Gift'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';


    it('Render a home component', ()=> {
        render(<Home/>)
        
        expect(screen.getByText('My birthday wishlist')).toBeInTheDocument()
    })

    it('All the components on the page', () => {
        const { container } = render(<Home/>)
        const nbrOfComponents =  container.querySelectorAll(".card").length

        expect(nbrOfComponents).toBe(4)
    })

    it('Right infos in the components', () => {
        const props = {name: 'Random Gift', picture: 'random.jpg', price: 420}
        const { queryAllByAltText, queryAllByText } = render(<Gift {...props} />);
        const name = queryAllByText(props.name, { exact: false })[0]
        const img = queryAllByAltText(props.name, { exact: false})[0].src
        const price = queryAllByText(props.price, { exact: false})[0].textContent

        expect(name).toHaveTextContent(props.name)
        expect(img).toContain(props.picture);
        expect(parseInt(price)).toBe(props.price)
    })

      

