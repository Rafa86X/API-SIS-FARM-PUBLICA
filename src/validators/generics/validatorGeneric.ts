import { CommonsModdels } from '../../models/CommonModels';

export abstract class ValidatorGeneric{



    static enumValidReasons(fieldName:string,data:string):void{

        const enumX =CommonsModdels.refersToReasons.map(c=>c);
        enumX[0] = '\'\'';
   
        if(!CommonsModdels.refersToReasons.includes(data)){
            throw new Error(`The ${fieldName} field  only accepts the data: ${enumX}`);
        }

    }

    static enumValidGender(fieldName:string,data:string):void{
   
        if(!CommonsModdels.gender.includes(data)){
            throw new Error(`The ${fieldName} field  only accepts the data: ${CommonsModdels.gender}`);
        }

    }

    static enumValidPharmacoType(fieldName:string,data:string):void{
   
        if(!CommonsModdels.pharmacoType.includes(data)){
            throw new Error(`The ${fieldName} field  only accepts the data: ${CommonsModdels.pharmacoType}`);
        }

    }

    static enumValidSpecies(fieldName:string,data:string):void{
   
        if(!CommonsModdels.species.includes(data)){
            throw new Error(`The ${fieldName} field  only accepts the data: ${CommonsModdels.species}`);
        }

    }

    static onlyNumbers(f_Name:string,eLength:number,data:unknown, role:string):void {


        const { fieldValue, fieldName } = this.captureFieldValue(data,f_Name);

        const regex = /[^0-9]/gi;
        if(regex.test(fieldValue)){
            throw new Error(`Only numbers in this field: ${fieldName}`);
        }

        if(role==='e'){
            if((fieldValue.length > eLength)||(fieldValue.length < eLength) ){
                throw new Error(`This field requires exactly ${eLength} digits: ${fieldName}`);
            }
        }

        if(role=='m'){
            if((fieldValue.length > eLength)){
                throw new Error(`This field requires maximum of ${eLength} digits: ${fieldName}`);
            }
        }

    }

    static onlyID(f_Name:string,data:unknown):void {


        const { fieldValue, fieldName } = this.captureFieldValue(data,f_Name);

        const regex = /[^a-z0-9]/g;
        if(regex.test(fieldValue)){
            throw new Error(`Only chars and numbers in this field: ${fieldName}`);
        }

        if(fieldValue.length != 24){
            
            throw new Error('This field requires exactly 24 digits.');
        }
        

       

    }

    static onlyChars(f_Name:string,eLength:number,data:unknown):void {


        const { fieldValue, fieldName } = this.captureFieldValue(data,f_Name);

        const regex = /[^a-z]/gi;
        if(regex.test(fieldValue)){
            throw new Error(`Only chars in this field: ${fieldName}`);
        }



        if((fieldValue.length > eLength)){
            throw new Error(`This field requires maximum of ${eLength} chars: ${fieldName}`);
        }
    

    }


    static onlyText(f_Name:string,eLength:number,data:unknown):void {


        const { fieldValue, fieldName } = this.captureFieldValue(data,f_Name);

        if((fieldValue.length > eLength)){
            throw new Error(`This field requires maximum of ${eLength} chars: ${fieldName}`);
        }
    

    }

    private static  captureFieldValue(data:unknown,fieldName:string):{ fieldValue: string, fieldName: string}{

        const dataArrrayValues = [...Object.values(data)];
        const dataArrrayKeys = [...Object.keys(data)];

        let fieldValue ='';
        for (let i = 0; i < dataArrrayValues.length; i++) {
            if(fieldName === dataArrrayKeys[i]){
                fieldValue=dataArrrayValues[i];
            }
            
        }

        return { fieldValue , fieldName};
    }

}