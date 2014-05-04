package com.example.android_webview_demo;

import android.content.Context;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;
 
public class WebAppInterface extends WebView {
 
	private Context mContext;
 
	public WebAppInterface(Context context) {
		super(context);
		mContext = context;
	}
 
 
	@JavascriptInterface
	public void showToast(String toast) {
		Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
	}
 
	@JavascriptInterface
	public void toLogCat(String paramString) {
		Log.i("WebAppInterface", paramString);
	}	
}