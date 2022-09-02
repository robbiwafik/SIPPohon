import Joi from 'joi';
import { Component } from 'react';
import Input from './Input';


class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = (schema, object, options={}) => {
        const {error} = Joi.object(schema).validate(object, options);
        
        return error;
    }

    handleChange = ({ currentTarget: input }) => {
        const { data, errors } = this.state;
        data[input.name] = input.value;
        
        const specificSchema = {
           [input.name]: this.schema[input.name]
       };
       // Object that needs to be validated
       const object = {
           [input.name]: input.value
       };
       const error = this.validate(specificSchema, object);
       if (error) {
           error.details.map(detail => {
               errors[input.name] = detail.message;
           });

           this.setState({ errors });
           return;
       }
       else if (errors[input.name]) delete errors[input.name];

       this.setState({ data });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { data, errors } = this.state; 
        const error = this.validate(this.schema, data, {abortEarly: false});
        if (error) {
            error.details.map(detail => {
                errors[detail.path[0]] = detail.message;
            });

            this.setState({ errors });
            return;
        }
        // Call the server
        this.doSubmit();
    }

    renderInput = (
        Icon, 
        name, 
        other={placeholder: '', type: 'text', autoComplete: 'on', autoFocus: false}
        ) => {
        return <Input 
                    autoComplete={other.autoComplete}
                    autoFocus={other.autoFocus}
                    error={this.state.errors[name]}
                    Icon={Icon}
                    name={name} 
                    onChange={this.handleChange}
                    placeholder={other.placeholder} 
                    type={other.type} 
                    />
    }
}

export default Form;