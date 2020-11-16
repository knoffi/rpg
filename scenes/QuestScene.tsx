import React, { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { Button, Dialog, HelperText, Portal, TextInput } from "react-native-paper"
import { association } from "../classes/Adjectives"
import { DetailsList } from "../components/DetailsList"
import { BasePrice } from "../helpingFunctions/menuCodeEnums"

interface descriptionDialogData{
    open:boolean,
    income:association,
    jobExamples:string,
    currencyName:string,
    price:number

}

const incomeExampleMap = new Map([
    [association.poor,"day labourer, apprentice, farmhand, peasant maid, retired carpenter, busker"],
    [association.worker,"cobbler, village priest, maid of a baroness, farmer, city guard"],
    [association.sophisticated,"exceptional tailor, city major, trade merchant, famous arena fighter, guild leader"],
    [association.rich, "world-known goldsmith, emperor, pirate queen, banking magnate, legendary adventurer"]
])
const CurrencySetDialog=(props:{currency:string,open:boolean,onDismiss:()=>void,setCurrency:(newCurrency:string)=>void})=>{
    const [text, setText] = useState(props.currency);

    return <Portal>
        <Dialog visible={props.open} onDismiss={props.onDismiss}>
            <Dialog.Content>
                <TextInput mode="outlined" value={text} label="New currency" placeholder={props.currency} onChangeText={setText}>
                </TextInput>
                <View><Button onPress={()=>{props.setCurrency(text);props.onDismiss()}} mode="contained">Okay!</Button></View>
            </Dialog.Content>
        </Dialog>
    </Portal>
}

const PriceSetDialog=(props:{priceText:string,lastPrice:number,setPriceText:(priceText:string)=>void,income:association,open:boolean,onDismiss:()=>void,setPrice:(newPrice:number,income:association)=>void})=>{
    const [textIsValid, setTextIsValid] = useState(true);

    const textIsNumber=(text:string)=>{
        return text.match(/^[0-9]+$/) != null;
    }
    return <Portal>
        <Dialog visible={props.open} onDismiss={()=>{props.setPriceText(props.lastPrice.toString());props.onDismiss()}}>
            <Dialog.Content>
                <TextInput mode="outlined" value={props.priceText} label="New price" placeholder={props.income.toUpperCase()} onChangeText={(text:string)=>{props.setPriceText(text);if(textIsNumber(text)){setTextIsValid(true)}else{setTextIsValid(false)};}} >
                </TextInput>
                <HelperText type="error" visible={!textIsValid}>Only positive numbers, please.</HelperText>
                <View><Button onPress={()=>{props.setPrice(parseInt(props.priceText),props.income);props.onDismiss()}} disabled={!textIsValid} mode="contained">Okay!</Button></View>
            </Dialog.Content>
        </Dialog>
    </Portal>
}

const PriceDescriptionDialog=(props:{descriptionDialogData:descriptionDialogData, onDismiss:()=>void}) =>{
return <Portal>
    <Dialog visible={props.descriptionDialogData.open} onDismiss={props.onDismiss}>
        <Dialog.Content>
            <Text style={{fontSize:18}}>{props.descriptionDialogData.price.toString()+ " " + props.descriptionDialogData.currencyName + " stands for the average price which "+ props.descriptionDialogData.income + " customers pay for a drink.   \n\n We recommend this for:\n"+ props.descriptionDialogData.jobExamples}
            </Text>
        </Dialog.Content>
    </Dialog>
</Portal>
}

export const QuestScene=(props:{fitting:{fits:association[],misfits:association[]},basePrice:BasePrice,setBasePrice:(newPrices:BasePrice)=>void})=>{
    const [descriptionDialogData,setDialogData] = useState({open:false,income:association.poor,jobExamples:"",currencyName:props.basePrice.currency,price:props.basePrice.poor})
    const [priceSetterData,setPriceSetterData] = useState({open:false,income:association.poor, priceText:props.basePrice.poor.toString(),price:12})
    const [currencySetterData,setCurrencySetterData] = useState({open:false,currency:props.basePrice.currency})

    const onInfoPress=(income:association)=>{
        let price:number;
        switch (income) {
            case association.poor:
                price=props.basePrice.poor
                break;
            case association.worker:
                price=props.basePrice.modest
                break;
            case association.sophisticated:
                price=props.basePrice.wealthy
                break;
        
            default:
                price = props.basePrice.rich
                break;
        }
        setDialogData({open:true,income:income,jobExamples:incomeExampleMap.get(income)!,currencyName:props.basePrice.currency,price:price})
    }
    const onPriceSetPress=(income:association)=>{
        let price:number;
        switch (income) {
            case association.poor:
                price=props.basePrice.poor
                setPriceSetterData({open:false,income:income,price:price,priceText:price.toString()})
                break;
            case association.worker:
                price=props.basePrice.modest
                setPriceSetterData({open:false,income:income,price:price,priceText:price.toString()})
                break;
            case association.sophisticated:
                price=props.basePrice.wealthy
                setPriceSetterData({open:false,income:income,price:price,priceText:price.toString()})
                break;
        
            default:
                price = props.basePrice.rich
                setPriceSetterData({open:false,income:income,price:price,priceText:price.toString()})
                break;
        }
        setPriceSetterData({open:true,income:income,price:price,priceText:price.toString()})
    }

    const onCurrencySetPress=()=>{
        setCurrencySetterData({open:true,currency:props.basePrice.currency})
    }

    const onPriceSet=(newPrice?:number,income?:association,newCurrency?:string)=>{
        if(newCurrency){
            props.setBasePrice(
                {
                currency:newCurrency,
                poor:props.basePrice.poor,
                modest:props.basePrice.modest,
                wealthy:props.basePrice.wealthy,
                rich:props.basePrice.rich
                }
            )
        }
        if(income){
            if(newPrice){
                switch (income) {
                    case association.poor:
                        props.setBasePrice({currency:props.basePrice.currency,poor:newPrice,modest:props.basePrice.modest,wealthy:props.basePrice.wealthy,rich:props.basePrice.rich})
                        break;
                
                    case association.worker:
                        props.setBasePrice({currency:props.basePrice.currency,poor:props.basePrice.poor,modest:newPrice,wealthy:props.basePrice.wealthy,rich:props.basePrice.rich})
                        break;
                
                    case association.sophisticated:
                        props.setBasePrice({currency:props.basePrice.currency,poor:props.basePrice.poor,modest:props.basePrice.modest,wealthy:newPrice,rich:props.basePrice.rich})
                        break;
                
                    default:
                        props.setBasePrice({currency:props.basePrice.currency,poor:props.basePrice.poor,modest:props.basePrice.modest,wealthy:props.basePrice.wealthy,rich:newPrice})
                        break;
                }
            }
        }
    }

    const setPriceText=(text:string)=>{
        setPriceSetterData({open:priceSetterData.open,income:priceSetterData.income,priceText:text,price:priceSetterData.price})
    }
    
    const onDialogDismiss=()=>{
        setDialogData({open:false, income:descriptionDialogData.income,price:descriptionDialogData.price,currencyName:descriptionDialogData.currencyName,jobExamples:descriptionDialogData.jobExamples})
        setPriceSetterData({open:false, income:priceSetterData.income,price:priceSetterData.price,priceText:priceSetterData.priceText})
        setCurrencySetterData({open:false, currency:props.basePrice.currency})
    }
    return <ScrollView>
        <PriceDescriptionDialog descriptionDialogData={descriptionDialogData} onDismiss={onDialogDismiss}/>
        <PriceSetDialog open={priceSetterData.open} onDismiss={onDialogDismiss} income={priceSetterData.income} priceText={priceSetterData.priceText} lastPrice={priceSetterData.price}
        setPrice={onPriceSet} setPriceText={setPriceText}></PriceSetDialog>
        <CurrencySetDialog open={currencySetterData.open}  currency={currencySetterData.currency} setCurrency={(newCurrency:string)=>{onPriceSet(undefined,undefined,newCurrency)}} onDismiss={onDialogDismiss}></CurrencySetDialog>
        <DetailsList fitting={props.fitting} basePrice={props.basePrice} onInfoPress={onInfoPress} onPriceSetPress={onPriceSetPress} onCurrencySetPress={onCurrencySetPress}></DetailsList>
        </ScrollView>}
        

