import React from 'react'
import { storiesOf } from '@storybook/react'
import BasicExample from '../src/examples/basic-example/BasicExample'
import ComplexExample from '../src/examples/complex-example/ComplexExample'
storiesOf('Button', module)
  .add('Basic Example', () => (
    <BasicExample />
  ))
  .add('Complex Example', () => (
    <ComplexExample />
  ))
