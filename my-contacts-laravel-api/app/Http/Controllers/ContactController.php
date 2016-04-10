<?php
namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Response;
 

use Illuminate\Http\Request;
use Carbon\Carbon;
use Session;
use App\Contact;
class ContactController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        $contacts = Contact::all();
        if(empty($contacts))
        {
            return Response::json([ 
                    'error' => 'Contacts do not exist'
                ], 404);
        }
        return Response::json([$contacts], 200);
    }
 
    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        
        if(Contact::create($request->all()))
        return Response::json(array('msg'=>"Store the Recode Successfull"), 200);
        else
        return Response::json(array('msg'=>"Unsuccessfull"), 404);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return Response
     */
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        if(!$contact)
            {
                return Response::json([ 
                        'error' => 'Contact does not exist'
                    ], 404);
            }
            return Response::json([$contact], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $contact = Contact::findOrFail($id);
        if(!$contact)
            {
                return Response::json([ 
                        'error' => 'Contact does not exist'
                    ], 404);
            }
            return Response::json([$contact], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        
        $contact = Contact::findOrFail($id);
        if($contact)
        {
            $contact->update($request->all());
            return Response::json([ 
                    'success' => 'Contact Updated'
                ], 200);
        }
        else{
            return Response::json([ 
                    'error' => 'Contact does not Update'
                ], 404);
        }    

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $contact = Contact::destroy($id);
        if($contact)
        {
            return Response::json([ 
                    'success' => 'Contact Deleted'
                ], 200);
        }
        else{
            
            return Response::json([ 
                        'error' => 'Contact does not Delete'
                    ], 404);
        }
    }

}
