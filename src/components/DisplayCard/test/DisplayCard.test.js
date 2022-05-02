import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DisplayCard from '../DisplayCard';

test('renders the displaycard without crashing', () => {
    render(<DisplayCard firstName="Raf" lastName="Swiderski" nationality="United Kingdom"></DisplayCard>)

    expect(screen.getByText('Raf Swiderski')).toBeVisible()
    expect(screen.getByText('Nationality: United Kingdom')).toBeVisible()

})