import { Component } from 'react';
import Form from '../components/Form'


export class Table extends Component {
    state = {
        Fieldnames:{
            Name:false,
            Quantity:false,
            Unitprice:false
        }
    }
    chkclick=(e)=>{
        var{name,checked}=e.target;
        this.setState((e) => {
            var SelectedField = e.Fieldnames;
            return SelectedField[name] = checked;
        });
    };

    render() {
        var displayField = Object.keys(this.state.Fieldnames).filter((x) => this.state.Fieldnames[x]);

        return(
       <div>
        <div className="container flex justify-center mx-auto">
    <div className="flex flex-col">
        <div className="w-full">
            <div className="border-b border-gray-200 shadow">
                <table>
                    <thead className="bg-gray-50">
                        <tr className="bg-blue-300">
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Column Name
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Column Type
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Label
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Input type
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Required
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="whitespace-nowrap">
                            <td className="px-6 py-4 text-sm text-gray-500">
                            <input className="check-box" type="checkbox" name="Name"onChange={this.chkclick}/>&nbsp; name 
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    varchar
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">Label</div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                Text input
                            </td>
                            <td className="px-6 py-4">
                            <center><input className="check-box" type="checkbox"></input></center>
                            </td>
                            
                        </tr>
                        <tr className="whitespace-nowrap">
                            <td className="px-6 py-4 text-sm text-gray-500">
                            <input className="check-box" type="checkbox" name="Quantity"onChange={this.chkclick}/>&nbsp;Quantity 
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    integer
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">quantity</div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                Number input
                            </td>
                            <td className="px-6 py-4">
                            <center><input className="check-box" type="checkbox"></input></center>
                            </td>
                           
                        </tr>
                        <tr className="whitespace-nowrap">
                            <td className="px-6 py-4 text-sm text-gray-500">
                            <input className="check-box" type="checkbox" name="Unitprice"onChange={this.chkclick}/> &nbsp; unit_price_cents  
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                   integer
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">unit price cents</div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                number input
                            </td>
                            <td className="px-6 py-4">
                            <center><input className="check-box" type="checkbox"></input></center>
                            </td>
                            
                        </tr>

                    </tbody>
                </table>
               
            </div>
        </div>
    </div>

</div>
<div className="text-black-500">
    {displayField} 
</div>
</div>





    
    );
}
}

export default Table;
