import{g as B,_ as jt,a as qn,b as tr,c as zn,d as G,e as Nt,i as qe,p as Kn,u as Gn,E as Ft,q as De,f as Me,h as W,j as nr,k as sr,S as Pe,l as ze,F as yt,m as rr,n as ir,L as or,o as Jn,r as ar,s as cr,t as lr,v as Ot,C as xt,w as dt,x as ur,y as dr,z as hr,A as fr,B as w,D as hn,G as Ee,H as ce,I as Ze,J as a,K as $e,M as fn,N as pr,O as mr,P as Bt,Q as gr,R as _r,T as Rt,U as vr,V as yr,W as Yn,X as wr}from"./main-77t54wJO.js";function $t(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function Xn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const br=Xn,Qn=new Ft("auth","Firebase",Xn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new or("@firebase/auth");function Ir(n,...e){ht.logLevel<=Jn.WARN&&ht.warn(`Auth (${Pe}): ${n}`,...e)}function rt(n,...e){ht.logLevel<=Jn.ERROR&&ht.error(`Auth (${Pe}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,...e){throw Ht(n,...e)}function te(n,...e){return Ht(n,...e)}function Zn(n,e,t){const s=Object.assign(Object.assign({},br()),{[e]:t});return new Ft("auth","Firebase",s).create(e,{appName:n.name})}function me(n){return Zn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ht(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Qn.create(n,...e)}function m(n,e,...t){if(!n)throw Ht(e,...t)}function Z(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rt(e),new Error(e)}function oe(n,e){n||Z(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Tr(){return pn()==="http:"||pn()==="https:"}function pn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tr()||ar()||"connection"in navigator)?navigator.onLine:!0}function kr(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.shortDelay=e,this.longDelay=t,oe(t>e,"Short delay should be less than long delay!"),this.isMobile=rr()||ir()}get(){return Er()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){oe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cr=new Ke(3e4,6e4);function se(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function X(n,e,t,s,r={}){return ts(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=ze(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return lr()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&qe(n.emulatorConfig.host)&&(u.credentials="include"),es.fetch()(await ns(n,n.config.apiHost,t,c),u)})}async function ts(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rr),e);try{const r=new Pr(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw et(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw et(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw et(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw et(n,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zn(n,d,u);q(n,d)}}catch(r){if(r instanceof yt)throw r;q(n,"network-request-failed",{message:String(r)})}}async function wt(n,e,t,s,r={}){const i=await X(n,e,t,s,r);return"mfaPendingCredential"in i&&q(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ns(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?Vt(n.config,r):`${n.config.apiScheme}://${r}`;return Sr.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Ar(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(te(this.auth,"network-request-failed")),Cr.get())})}}function et(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=te(n,e,s);return r.customData._tokenResponse=t,r}function mn(n){return n!==void 0&&n.enterprise!==void 0}class Nr{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ar(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Or(n,e){return X(n,"GET","/v2/recaptchaConfig",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n,e){return X(n,"POST","/v1/accounts:delete",e)}async function ft(n,e){return X(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lr(n,e=!1){const t=B(n),s=await t.getIdToken(e),r=Wt(s);m(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:je(St(r.auth_time)),issuedAtTime:je(St(r.iat)),expirationTime:je(St(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function St(n){return Number(n)*1e3}function Wt(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return rt("JWT malformed, contained fewer than 3 sections"),null;try{const r=cr(t);return r?JSON.parse(r):(rt("Failed to decode base64 JWT payload"),null)}catch(r){return rt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gn(n){const e=Wt(n);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof yt&&Ur(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ur({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=je(this.lastLoginAt),this.creationTime=je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(n){var e;const t=n.auth,s=await n.getIdToken(),r=await He(n,ft(t,{idToken:s}));m(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ss(i.providerUserInfo):[],c=jr(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ut(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,y)}async function Mr(n){const e=B(n);await pt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jr(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ss(n){return n.map(e=>{var{providerId:t}=e,s=$t(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e){const t=await ts(n,{},async()=>{const s=ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await ns(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&qe(n.emulatorConfig.host)&&(l.credentials="include"),es.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Br(n,e){return X(n,"POST","/v2/accounts:revokeToken",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){m(e.length!==0,"internal-error");const t=gn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(m(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Fr(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Se;return s&&(m(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(m(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(m(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Se,this.toJSON())}_performRefresh(){return Z("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){m(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class J{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=$t(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ut(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await He(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lr(this,e)}reload(){return Mr(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new J(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await pt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(G(this.auth.app))return Promise.reject(me(this.auth));const e=await this.getIdToken();return await He(this,xr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,c,l,u,d;const y=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,S=(c=t.tenantId)!==null&&c!==void 0?c:void 0,R=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=t.createdAt)!==null&&u!==void 0?u:void 0,E=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:P,isAnonymous:C,providerData:N,stsTokenManager:U}=t;m(A&&U,e,"internal-error");const O=Se.fromJSON(this.name,U);m(typeof A=="string",e,"internal-error"),le(y,e.name),le(g,e.name),m(typeof P=="boolean",e,"internal-error"),m(typeof C=="boolean",e,"internal-error"),le(_,e.name),le(T,e.name),le(S,e.name),le(R,e.name),le(v,e.name),le(E,e.name);const $=new J({uid:A,auth:e,email:g,emailVerified:P,displayName:y,isAnonymous:C,photoURL:T,phoneNumber:_,tenantId:S,stsTokenManager:O,createdAt:v,lastLoginAt:E});return N&&Array.isArray(N)&&($.providerData=N.map(re=>Object.assign({},re))),R&&($._redirectEventId=R),$}static async _fromIdTokenResponse(e,t,s=!1){const r=new Se;r.updateFromServerResponse(t);const i=new J({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await pt(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];m(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?ss(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Se;c.updateFromIdToken(s);const l=new J({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ut(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Map;function ie(n){oe(n instanceof Function,"Expected a class definition");let e=_n.get(n);return e?(oe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_n.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rs.type="NONE";const vn=rs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,e,t){return`firebase:${n}:${e}:${t}`}class Ce{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=it(this.userKey,r.apiKey,i),this.fullPersistenceKey=it("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ft(this.auth,{idToken:e}).catch(()=>{});return t?J._fromGetAccountInfoResponse(this.auth,t,e):null}return J._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ce(ie(vn),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ie(vn);const o=it(s,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){let y;if(typeof d=="string"){const g=await ft(e,{idToken:d}).catch(()=>{});if(!g)break;y=await J._fromGetAccountInfoResponse(e,g,d)}else y=J._fromJSON(e,d);u!==i&&(c=y),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ce(i,e,s):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ce(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(is(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(us(e))return"Blackberry";if(ds(e))return"Webos";if(os(e))return"Safari";if((e.includes("chrome/")||as(e))&&!e.includes("edge/"))return"Chrome";if(ls(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function is(n=W()){return/firefox\//i.test(n)}function os(n=W()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function as(n=W()){return/crios\//i.test(n)}function cs(n=W()){return/iemobile/i.test(n)}function ls(n=W()){return/android/i.test(n)}function us(n=W()){return/blackberry/i.test(n)}function ds(n=W()){return/webos/i.test(n)}function qt(n=W()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $r(n=W()){var e;return qt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hr(){return nr()&&document.documentMode===10}function hs(n=W()){return qt(n)||ls(n)||ds(n)||us(n)||/windows phone/i.test(n)||cs(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n,e=[]){let t;switch(n){case"Browser":t=yn(W());break;case"Worker":t=`${yn(W())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pe}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(n,e={}){return X(n,"GET","/v2/passwordPolicy",se(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=6;class zr{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:qr,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wn(this),this.idTokenSubscription=new wn(this),this.beforeStateQueue=new Vr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Ce.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ft(this,{idToken:e}),s=await J._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(G(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kr()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(G(this.app))return Promise.reject(me(this));const t=e?B(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return G(this.app)?Promise.reject(me(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return G(this.app)?Promise.reject(me(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ie(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wr(this),t=new zr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ft("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Br(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await Ce.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(G(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ir(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function be(n){return B(n)}class wn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ur(t=>this.observer=t)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gr(n){bt=n}function ps(n){return bt.loadJS(n)}function Jr(){return bt.recaptchaEnterpriseScript}function Yr(){return bt.gapiScript}function Xr(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Qr{constructor(){this.enterprise=new Zr}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Zr{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ei="recaptcha-enterprise",ms="NO_RECAPTCHA";class ti{constructor(e){this.type=ei,this.auth=be(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Or(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Nr(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function r(i,o,c){const l=window.grecaptcha;mn(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ms)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qr().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(c=>{if(!t&&mn(window.grecaptcha))r(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Jr();l.length!==0&&(l+=c),ps(l).then(()=>{r(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function bn(n,e,t,s=!1,r=!1){const i=new ti(n);let o;if(r)o=ms;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function In(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await bn(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await bn(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n,e){const t=jt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Nt(i,e??{}))return r;q(r,"already-initialized")}return t.initialize({options:e})}function si(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ie);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ri(n,e,t){const s=be(n);m(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=gs(e),{host:o,port:c}=ii(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){m(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),m(Nt(u,s.config.emulator)&&Nt(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,qe(o)?(Kn(`${i}//${o}${l}`),Gn("Auth",!0)):oi()}function gs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ii(n){const e=gs(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Tn(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Tn(o)}}}function Tn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function oi(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Z("not implemented")}_getIdTokenResponse(e){return Z("not implemented")}_linkToIdToken(e,t){return Z("not implemented")}_getReauthenticationResolver(e){return Z("not implemented")}}async function ai(n,e){return X(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,e){return wt(n,"POST","/v1/accounts:signInWithPassword",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n,e){return wt(n,"POST","/v1/accounts:signInWithEmailLink",se(n,e))}async function ui(n,e){return wt(n,"POST","/v1/accounts:signInWithEmailLink",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends zt{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ve(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ve(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,t,"signInWithPassword",ci);case"emailLink":return li(e,{email:this._email,oobCode:this._password});default:q(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,s,"signUpPassword",ai);case"emailLink":return ui(e,{idToken:t,email:this._email,oobCode:this._password});default:q(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(n,e){return wt(n,"POST","/v1/accounts:signInWithIdp",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="http://localhost";class ye extends zt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):q("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=$t(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ye(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ae(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ae(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ae(e,t)}buildRequest(){const e={requestUri:di,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fi(n){const e=De(Me(n)).link,t=e?De(Me(e)).deep_link_id:null,s=De(Me(n)).deep_link_id;return(s?De(Me(s)).link:null)||s||t||e||n}class Kt{constructor(e){var t,s,r,i,o,c;const l=De(Me(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(s=l.oobCode)!==null&&s!==void 0?s:null,y=hi((r=l.mode)!==null&&r!==void 0?r:null);m(u&&d&&y,"argument-error"),this.apiKey=u,this.operation=y,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=fi(e);try{return new Kt(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.providerId=Ne.PROVIDER_ID}static credential(e,t){return Ve._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Kt.parseLink(t);return m(s,"argument-error"),Ve._fromEmailAndCode(e,s.code,s.tenantId)}}Ne.PROVIDER_ID="password";Ne.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ne.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends _s{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Ge{constructor(){super("facebook.com")}static credential(e){return ye._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ue.credential(e.oauthAccessToken)}catch{return null}}}ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ye._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return de.credential(t,s)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends Ge{constructor(){super("github.com")}static credential(e){return ye._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return he.credential(e.oauthAccessToken)}catch{return null}}}he.GITHUB_SIGN_IN_METHOD="github.com";he.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return ye._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fe.credential(t,s)}catch{return null}}}fe.TWITTER_SIGN_IN_METHOD="twitter.com";fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await J._fromIdTokenResponse(e,s,r),o=En(s);return new ge({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=En(s);return new ge({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function En(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends yt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,mt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new mt(e,t,s,r)}}function vs(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mt._fromErrorAndOperation(n,i,e,s):i})}async function pi(n,e,t=!1){const s=await He(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ge._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n,e,t=!1){const{auth:s}=n;if(G(s.app))return Promise.reject(me(s));const r="reauthenticate";try{const i=await He(n,vs(s,r,e,n),t);m(i.idToken,s,"internal-error");const o=Wt(i.idToken);m(o,s,"internal-error");const{sub:c}=o;return m(n.uid===c,s,"user-mismatch"),ge._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&q(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(n,e,t=!1){if(G(n.app))return Promise.reject(me(n));const s="signIn",r=await vs(n,s,e),i=await ge._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function gi(n,e){return ys(be(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Jt._fromServerResponse(e,t):"totpInfo"in t?Yt._fromServerResponse(e,t):q(e,"internal-error")}}class Jt extends Gt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Jt(t)}}class Yt extends Gt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Yt(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n){const e=be(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function vi(n,e,t){return G(n.app)?Promise.reject(me(n)):gi(B(n),Ne.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_i(n),s})}function yi(n,e,t,s){return B(n).onIdTokenChanged(e,t,s)}function wi(n,e,t){return B(n).beforeAuthStateChanged(e,t)}function bi(n,e,t,s){return B(n).onAuthStateChanged(e,t,s)}function ws(n){return B(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new ke("enroll",e,t)}static _fromMfaPendingCredential(e){return new ke("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ke._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return ke._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=be(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(c=>Gt._fromServerResponse(s,c));m(r.mfaPendingCredential,s,"internal-error");const o=ke._fromMfaPendingCredential(r.mfaPendingCredential);return new Xt(o,i,async c=>{const l=await c._process(s,o);delete r.mfaInfo,delete r.mfaPendingCredential;const u=Object.assign(Object.assign({},r),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const d=await ge._fromIdTokenResponse(s,t.operationType,u);return await s._updateCurrentUser(d.user),d;case"reauthenticate":return m(t.user,s,"internal-error"),ge._forOperation(t.user,t.operationType,u);default:q(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Ii(n,e){var t;const s=B(n),r=e;return m(e.customData.operationType,s,"argument-error"),m((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),Xt._fromError(s,r)}function Ti(n,e){return X(n,"POST","/v2/accounts/mfaEnrollment:start",se(n,e))}function Ei(n,e){return X(n,"POST","/v2/accounts/mfaEnrollment:finalize",se(n,e))}const gt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gt,"1"),this.storage.removeItem(gt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,Ri=10;class Is extends bs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Hr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ri):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ki)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Is.type="LOCAL";const Si=Is;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends bs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ts.type="SESSION";const Es=Ts;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new It(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await Ci(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}It.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Qt("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(y){const g=y;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return window}function Pi(n){ne().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){return typeof ne().WorkerGlobalScope<"u"&&typeof ne().importScripts=="function"}async function Ni(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Oi(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xi(){return ks()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="firebaseLocalStorageDb",Li=1,_t="firebaseLocalStorage",Ss="fbase_key";class Je{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Tt(n,e){return n.transaction([_t],e?"readwrite":"readonly").objectStore(_t)}function Ui(){const n=indexedDB.deleteDatabase(Rs);return new Je(n).toPromise()}function Dt(){const n=indexedDB.open(Rs,Li);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(_t,{keyPath:Ss})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(_t)?e(s):(s.close(),await Ui(),e(await Dt()))})})}async function kn(n,e,t){const s=Tt(n,!0).put({[Ss]:e,value:t});return new Je(s).toPromise()}async function Di(n,e){const t=Tt(n,!1).get(e),s=await new Je(t).toPromise();return s===void 0?null:s.value}function Rn(n,e){const t=Tt(n,!0).delete(e);return new Je(t).toPromise()}const Mi=800,ji=3;class Cs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ji)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ks()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=It._getInstance(xi()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ni(),!this.activeServiceWorker)return;this.sender=new Ai(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Oi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dt();return await kn(e,gt,"1"),await Rn(e,gt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>kn(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Di(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Tt(r,!1).getAll();return new Je(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cs.type="LOCAL";const Fi=Cs;function Bi(n,e){return X(n,"POST","/v2/accounts/mfaSignIn:finalize",se(n,e))}new Ke(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n,e){return e?ie(e):(m(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends zt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ae(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ae(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ae(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hi(n){return ys(n.auth,new Zt(n),n.bypassAuthState)}function Vi(n){const{auth:e,user:t}=n;return m(t,e,"internal-error"),mi(t,new Zt(n),n.bypassAuthState)}async function Wi(n){const{auth:e,user:t}=n;return m(t,e,"internal-error"),pi(t,new Zt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hi;case"linkViaPopup":case"linkViaRedirect":return Wi;case"reauthViaPopup":case"reauthViaRedirect":return Vi;default:q(this.auth,"internal-error")}}resolve(e){oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Ke(2e3,1e4);class Re extends As{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Re.currentPopupAction&&Re.currentPopupAction.cancel(),Re.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){oe(this.filter.length===1,"Popup operations only handle one event");const e=Qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Re.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qi.get())};e()}}Re.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="pendingRedirect",ot=new Map;class Ki extends As{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ot.get(this.auth._key());if(!e){try{const s=await Gi(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ot.set(this.auth._key(),e)}return this.bypassAuthState||ot.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gi(n,e){const t=Xi(e),s=Yi(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Ji(n,e){ot.set(n._key(),e)}function Yi(n){return ie(n._redirectPersistence)}function Xi(n){return it(zi,n.config.apiKey,n.name)}async function Qi(n,e,t=!1){if(G(n.app))return Promise.reject(me(n));const s=be(n),r=$i(s,e),o=await new Ki(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=10*60*1e3;class eo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!to(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ps(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(te(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zi&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sn(e))}saveEventToCache(e){this.cachedEventUids.add(Sn(e)),this.lastProcessedEventTime=Date.now()}}function Sn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ps({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function to(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ps(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(n,e={}){return X(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ro=/^https?/;async function io(n){if(n.config.emulator)return;const{authorizedDomains:e}=await no(n);for(const t of e)try{if(oo(t))return}catch{}q(n,"unauthorized-domain")}function oo(n){const e=Lt(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!ro.test(t))return!1;if(so.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new Ke(3e4,6e4);function Cn(){const n=ne().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function co(n){return new Promise((e,t)=>{var s,r,i;function o(){Cn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cn(),t(te(n,"network-request-failed"))},timeout:ao.get()})}if(!((r=(s=ne().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ne().gapi)===null||i===void 0)&&i.load)o();else{const c=Xr("iframefcb");return ne()[c]=()=>{gapi.load?o():t(te(n,"network-request-failed"))},ps(`${Yr()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw at=null,e})}let at=null;function lo(n){return at=at||co(n),at}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Ke(5e3,15e3),ho="__/auth/iframe",fo="emulator/auth/iframe",po={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function go(n){const e=n.config;m(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vt(e,fo):`https://${n.config.authDomain}/${ho}`,s={apiKey:e.apiKey,appName:n.name,v:Pe},r=mo.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${ze(s).slice(1)}`}async function _o(n){const e=await lo(n),t=ne().gapi;return m(t,n,"internal-error"),e.open({where:document.body,url:go(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:po,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=te(n,"network-request-failed"),c=ne().setTimeout(()=>{i(o)},uo.get());function l(){ne().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yo=500,wo=600,bo="_blank",Io="http://localhost";class An{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function To(n,e,t,s=yo,r=wo){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},vo),{width:s.toString(),height:r.toString(),top:i,left:o}),u=W().toLowerCase();t&&(c=as(u)?bo:t),is(u)&&(e=e||Io,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[_,T])=>`${g}${_}=${T},`,"");if($r(u)&&c!=="_self")return Eo(e||"",c),new An(null);const y=window.open(e||"",c,d);m(y,n,"popup-blocked");try{y.focus()}catch{}return new An(y)}function Eo(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="__/auth/handler",Ro="emulator/auth/handler",So=encodeURIComponent("fac");async function Pn(n,e,t,s,r,i){m(n.config.authDomain,n,"auth-domain-config-required"),m(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Pe,eventId:r};if(e instanceof _s){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",sr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,y]of Object.entries({}))o[d]=y}if(e instanceof Ge){const d=e.getScopes().filter(y=>y!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),u=l?`#${So}=${encodeURIComponent(l)}`:"";return`${Co(n)}?${ze(c).slice(1)}${u}`}function Co({config:n}){return n.emulator?Vt(n,Ro):`https://${n.authDomain}/${ko}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="webStorageSupport";class Ao{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Es,this._completeRedirectFn=Qi,this._overrideRedirectResult=Ji}async _openPopup(e,t,s,r){var i;oe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Pn(e,t,s,Lt(),r);return To(e,o,Qt())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Pn(e,t,s,Lt(),r);return Pi(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(oe(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await _o(e),s=new eo(e);return t.register("authEvent",r=>(m(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ct,{type:Ct},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ct];o!==void 0&&t(!!o),q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=io(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hs()||os()||qt()}}const Po=Ao;class No{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Z("unexpected MultiFactorSessionType")}}}class ct{static assertionForEnrollment(e,t){return We._fromSecret(e,t)}static assertionForSignIn(e,t){return We._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const s=e;m(typeof((t=s.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");const r=await Ti(s.user.auth,{idToken:s.credential,totpEnrollmentInfo:{}});return en._fromStartTotpMfaEnrollmentResponse(r,s.user.auth)}}ct.FACTOR_ID="totp";class We extends No{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new We(t,void 0,e)}static _fromEnrollmentId(e,t){return new We(t,e)}async _finalizeEnroll(e,t,s){return m(typeof this.secret<"u",e,"argument-error"),Ei(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){m(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const s={verificationCode:this.otp};return Bi(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}}class en{constructor(e,t,s,r,i,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new en(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let r=!1;return(tt(e)||tt(t))&&(r=!0),r&&(tt(e)&&(e=((s=this.auth.currentUser)===null||s===void 0?void 0:s.email)||"unknownuser"),tt(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function tt(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var Nn="@firebase/auth",On="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lo(n){Ot(new xt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;m(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fs(n)},u=new Kr(s,r,i,l);return si(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ot(new xt("auth-internal",e=>{const t=be(e.getProvider("auth").getImmediate());return(s=>new Oo(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Nn,On,xo(n)),dt(Nn,On,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=5*60,Do=qn("authIdTokenMaxAge")||Uo;let xn=null;const Mo=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Do)return;const r=t==null?void 0:t.token;xn!==r&&(xn=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function jo(n=zn()){const e=jt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ni(n,{popupRedirectResolver:Po,persistence:[Fi,Si,Es]}),s=qn("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Mo(i.toString());wi(t,o,()=>o(t.currentUser)),yi(t,c=>o(c))}}const r=tr("auth");return r&&ri(t,`http://${r}`),t}function Fo(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Gr({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=te("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Fo().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lo("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="firebasestorage.googleapis.com",Os="storageBucket",Bo=2*60*1e3,$o=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M extends yt{constructor(e,t,s=0){super(At(e),`Firebase Storage: ${t} (${At(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,M.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return At(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var D;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(D||(D={}));function At(n){return"storage/"+n}function tn(){const n="An unknown error occurred, please check the error payload for server response.";return new M(D.UNKNOWN,n)}function Ho(n){return new M(D.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Vo(n){return new M(D.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Wo(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new M(D.UNAUTHENTICATED,n)}function qo(){return new M(D.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zo(n){return new M(D.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Ko(){return new M(D.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Go(){return new M(D.CANCELED,"User canceled the upload/download.")}function Jo(n){return new M(D.INVALID_URL,"Invalid URL '"+n+"'.")}function Yo(n){return new M(D.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Xo(){return new M(D.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Os+"' property when initializing the app?")}function Qo(){return new M(D.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Zo(n){return new M(D.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mt(n){return new M(D.INVALID_ARGUMENT,n)}function xs(){return new M(D.APP_DELETED,"The Firebase app was deleted.")}function ea(n){return new M(D.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fe(n,e){return new M(D.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ue(n){throw new M(D.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=V.makeFromUrl(e,t)}catch{return new V(e,"")}if(s.path==="")return s;throw Yo(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${y}/${d}/b/${r}/o${g}`,"i"),T={bucket:1,path:3},S=t===Ns?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",v=new RegExp(`^https?://${S}/${r}/${R}`,"i"),A=[{regex:c,indices:l,postModify:i},{regex:_,indices:T,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<A.length;P++){const C=A[P],N=C.regex.exec(e);if(N){const U=N[C.indices.bucket];let O=N[C.indices.path];O||(O=""),s=new V(U,O),C.postModify(s);break}}if(s==null)throw Jo(e);return s}}class ta{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n,e,t){let s=1,r=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...R){u||(u=!0,e.apply(null,R))}function y(R){r=setTimeout(()=>{r=null,n(_,l())},R)}function g(){i&&clearTimeout(i)}function _(R,...v){if(u){g();return}if(R){g(),d.call(null,R,...v);return}if(l()||o){g(),d.call(null,R,...v);return}s<64&&(s*=2);let A;c===1?(c=2,A=0):A=(s+Math.random())*1e3,y(A)}let T=!1;function S(R){T||(T=!0,g(),!u&&(r!==null?(R||(c=2),clearTimeout(r),y(0)):R||(c=1)))}return y(0),i=setTimeout(()=>{o=!0,S(!0)},t),S}function sa(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){return n!==void 0}function ia(n){return typeof n=="object"&&!Array.isArray(n)}function Ls(n){return typeof n=="string"||n instanceof String}function Ln(n){return nn()&&n instanceof Blob}function nn(){return typeof Blob<"u"}function Un(n,e,t,s){if(s<e)throw Mt(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Mt(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function oa(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var ve;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ve||(ve={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,s,r,i,o,c,l,u,d,y,g=!0,_=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=y,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,S)=>{this.resolve_=T,this.reject_=S,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new nt(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===ve.NO_ERROR,l=i.getStatus();if(!c||aa(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===ve.ABORT;s(!1,new nt(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new nt(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());ra(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=tn();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(r.canceled){const l=this.appDelete_?xs():Go();o(l)}else{const l=Ko();o(l)}};this.canceled_?t(!1,new nt(!1,null,!0)):this.backoffId_=na(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sa(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nt{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function la(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ua(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function da(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ha(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function fa(n,e,t,s,r,i,o=!0,c=!1){const l=oa(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return da(d,e),la(d,t),ua(d,i),ha(d,s),new ca(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ma(...n){const e=pa();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(nn())return new Blob(n);throw new M(D.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ga(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n){if(typeof atob>"u")throw Zo("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pt{constructor(e,t){this.data=e,this.contentType=t||null}}function va(n,e){switch(n){case ee.RAW:return new Pt(Us(e));case ee.BASE64:case ee.BASE64URL:return new Pt(Ds(n,e));case ee.DATA_URL:return new Pt(wa(e),ba(e))}throw tn()}function Us(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=n.charCodeAt(++t);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ya(n){let e;try{e=decodeURIComponent(n)}catch{throw Fe(ee.DATA_URL,"Malformed data URL.")}return Us(e)}function Ds(n,e){switch(n){case ee.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Fe(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ee.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Fe(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=_a(e)}catch(r){throw r.message.includes("polyfill")?r:Fe(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class Ms{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Fe(ee.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=Ia(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function wa(n){const e=new Ms(n);return e.base64?Ds(ee.BASE64,e.rest):ya(e.rest)}function ba(n){return new Ms(n).contentType}function Ia(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){let s=0,r="";Ln(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ln(this.data_)){const s=this.data_,r=ga(s,e,t);return r===null?null:new pe(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new pe(s,!0)}}static getBlob(...e){if(nn()){const t=e.map(s=>s instanceof pe?s.data_:s);return new pe(ma.apply(null,t))}else{const t=e.map(o=>Ls(o)?va(ee.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)r[i++]=o[c]}),new pe(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){let e;try{e=JSON.parse(n)}catch{return null}return ia(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ka(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function js(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n,e){return e}class F{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||Ra}}let st=null;function Sa(n){return!Ls(n)||n.length<2?n:js(n)}function Fs(){if(st)return st;const n=[];n.push(new F("bucket")),n.push(new F("generation")),n.push(new F("metageneration")),n.push(new F("name","fullPath",!0));function e(i,o){return Sa(o)}const t=new F("name");t.xform=e,n.push(t);function s(i,o){return o!==void 0?Number(o):o}const r=new F("size");return r.xform=s,n.push(r),n.push(new F("timeCreated")),n.push(new F("updated")),n.push(new F("md5Hash",null,!0)),n.push(new F("cacheControl",null,!0)),n.push(new F("contentDisposition",null,!0)),n.push(new F("contentEncoding",null,!0)),n.push(new F("contentLanguage",null,!0)),n.push(new F("contentType",null,!0)),n.push(new F("metadata","customMetadata",!0)),st=n,st}function Ca(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new V(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Aa(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const o=t[i];s[o.local]=o.xform(s,e[o.server])}return Ca(s,n),s}function Pa(n,e,t){const s=Ta(e);return s===null?null:Aa(n,s,t)}function Na(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class rn{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){if(!n)throw tn()}function Bs(n,e){function t(s,r){const i=Pa(n,r,e);return Oa(i!==null),i}return t}function $s(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=qo():r=Wo():t.getStatus()===402?r=Vo(n.bucket):t.getStatus()===403?r=zo(n.path):r=s,r.status=t.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Hs(n){const e=$s(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Ho(n.path)),i.serverResponse=r.serverResponse,i}return t}function xa(n,e,t){const s=e.fullServerUrl(),r=sn(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new rn(r,i,Bs(n,t),o);return c.errorHandler=Hs(e),c}function La(n,e,t){const s=e.fullServerUrl(),r=sn(s,n.host,n._protocol)+"?alt=media",i="GET",o=n.maxOperationRetryTime,c=new rn(r,i,(l,u)=>u,o);return c.errorHandler=Hs(e),c}function Ua(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Da(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=Ua(null,e)),s}function Ma(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let A="";for(let P=0;P<2;P++)A=A+Math.random().toString().slice(2);return A}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=Da(e,s,r),d=Na(u,t),y="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",_=pe.getBlob(y,s,g);if(_===null)throw Qo();const T={name:u.fullPath},S=sn(i,n.host,n._protocol),R="POST",v=n.maxUploadRetryTime,E=new rn(S,R,Bs(n,t),v);return E.urlParams=T,E.headers=o,E.body=_.uploadData(),E.errorHandler=$s(e),E}class Vs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ve.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ve.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ve.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r,i){if(this.sent_)throw Ue("cannot .send() more than once");if(qe(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ue("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ue("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ue("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ue("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ja extends Vs{initXhr(){this.xhr_.responseType="text"}}function Ws(){return new ja}class Fa extends Vs{initXhr(){this.xhr_.responseType="blob"}}function Ba(){return new Fa}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this._service=e,t instanceof V?this._location=t:this._location=V.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new we(e,t)}get root(){const e=new V(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return js(this._location.path)}get storage(){return this._service}get parent(){const e=Ea(this._location.path);if(e===null)return null;const t=new V(this._location.bucket,e);return new we(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ea(e)}}function $a(n,e){n._throwIfRoot("getBlob");const t=La(n.storage,n._location);return n.storage.makeRequestWithTokens(t,Ba).then(s=>s)}function Ha(n,e,t){n._throwIfRoot("uploadBytes");const s=Ma(n.storage,n._location,Fs(),new pe(e,!0),t);return n.storage.makeRequestWithTokens(s,Ws).then(r=>({metadata:r,ref:n}))}function Va(n){n._throwIfRoot("getMetadata");const e=xa(n.storage,n._location,Fs());return n.storage.makeRequestWithTokens(e,Ws)}function Wa(n,e){const t=ka(n._location.path,e),s=new V(n._location.bucket,t);return new we(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){return/^[A-Za-z]+:\/\//.test(n)}function za(n,e){return new we(n,e)}function qs(n,e){if(n instanceof on){const t=n;if(t._bucket==null)throw Xo();const s=new we(t,t._bucket);return e!=null?qs(s,e):s}else return e!==void 0?Wa(n,e):n}function Ka(n,e){if(e&&qa(e)){if(n instanceof on)return za(n,e);throw Mt("To use ref(service, url), the first argument must be a Storage instance.")}else return qs(n,e)}function Dn(n,e){const t=e==null?void 0:e[Os];return t==null?null:V.makeFromBucketSpec(t,n)}function Ga(n,e,t,s={}){n.host=`${e}:${t}`;const r=qe(e);r&&(Kn(`https://${n.host}/b`),Gn("Storage",!0)),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:hr(i,n.app.options.projectId))}class on{constructor(e,t,s,r,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Ns,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Bo,this._maxUploadRetryTime=$o,this._requests=new Set,r!=null?this._bucket=V.makeFromBucketSpec(r,this._host):this._bucket=Dn(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=V.makeFromBucketSpec(this._url,e):this._bucket=Dn(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Un("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Un("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(G(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new we(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new ta(xs());{const o=fa(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const Mn="@firebase/storage",jn="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="storage";function Ks(n,e,t){return n=B(n),Ha(n,e,t)}function Ja(n){return n=B(n),Va(n)}function lt(n,e){return n=B(n),Ka(n,e)}function Ya(n=zn(),e){n=B(n);const s=jt(n,zs).getImmediate({identifier:e}),r=dr("storage");return r&&Xa(s,...r),s}function Xa(n,e,t,s={}){Ga(n,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n,e){return n=B(n),$a(n)}function Qa(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new on(t,s,r,e,Pe)}function Za(){Ot(new xt(zs,Qa,"PUBLIC").setMultipleInstances(!0)),dt(Mn,jn,""),dt(Mn,jn,"esm2017")}Za();const _e=jo(Yn),ut=Ya(Yn),ec=document.documentElement.dataset.page==="history",tc="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",nc=n=>`https://firebasestorage.googleapis.com/v0/b/${pr}/o/${encodeURIComponent(n)}?alt=media`,sc=()=>{const n=new Uint8Array(12);return crypto.getRandomValues(n),`${Array.from(n,e=>e.toString(16).padStart(2,"0")).join("")}.jpg`},rc=()=>({text:{},photos:{},order:null}),vt=n=>JSON.parse(JSON.stringify({text:n.text||{},photos:n.photos||{},order:n.order||$e})),Bn=(n,e)=>JSON.stringify(vt(n))===JSON.stringify(vt(e));async function ic(n){if(!/^image\/(jpeg|png|webp)$/.test(n.type))throw new Error("Please choose a JPEG, PNG or WebP photo.");const e=await createImageBitmap(n),t=Math.min(1,2400/Math.max(e.width,e.height)),s=Math.round(e.width*t),r=Math.round(e.height*t),i=document.createElement("canvas");i.width=s,i.height=r;const o=i.getContext("2d");o.fillStyle="#fff",o.fillRect(0,0,s,r),o.drawImage(e,0,0,s,r);const c=await new Promise(l=>i.toBlob(l,"image/jpeg",.86));if(!c)throw new Error("That photo couldn’t be read.");if(c.size>8*1024*1024)throw new Error("That photo is too large even after resizing.");return c}const Be=n=>{const e=n&&n.code||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"That email and password don’t match an account.":e.includes("too-many-requests")?"Too many attempts. Wait a few minutes and try again.":e.includes("network")?"No connection. Check the internet and try again.":e.includes("invalid-verification-code")?"That code isn’t right. Try the latest code from your authenticator app.":e.includes("permission-denied")||e.includes("unauthorized")?"This account isn’t allowed to do that.":n&&n.message||"Something went wrong."};function vc({onClose:n}){const{published:e,setEditor:t}=fr(),[s,r]=w.useState(void 0),[i,o]=w.useState("starting"),[c,l]=w.useState(null),[u,d]=w.useState(null),[y,g]=w.useState(null),[_,T]=w.useState(!0),[S,R]=w.useState(0),[v,E]=w.useState(""),[A,P]=w.useState(""),[C,N]=w.useState(null),[U,O]=w.useState(null),[$,re]=w.useState({}),I=w.useRef(new Set),h=w.useRef(c);h.current=c,w.useEffect(()=>bi(_e,f=>r(f)),[]),w.useEffect(()=>{if(s===void 0)return;if(!s){o("signin"),l(null);return}let f=!0;return o("checking"),(async()=>{try{const[b,L]=await Promise.all([hn(Ee(ce,"siteContent","draft")),hn(Ee(ce,"siteContent","published"))]);if(!f)return;const x=Ze(L.exists()?L.data():null),z=b.exists()?Ze(b.data()):x;g(x),d(z),l(z),R(Le=>Le+1),o("ready")}catch(b){if(!f)return;o(b&&b.code==="permission-denied"?"denied":"signin"),b&&b.code==="permission-denied"||P(Be(b))}})(),()=>{f=!1}},[s]);const p=!!(c&&u&&!Bn(c,u)),k=!!(c&&y&&!Bn(c,y));w.useEffect(()=>{const f=b=>{p&&(b.preventDefault(),b.returnValue="")};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[p]),w.useEffect(()=>(document.body.classList.toggle("ws-editor-on",i==="ready"),document.body.classList.toggle("ws-editing",i==="ready"&&_),()=>{document.body.classList.remove("ws-editor-on","ws-editing")}),[i,_]);const j=w.useCallback((f,b)=>{l(L=>{if(!L)return L;const x={...L.text};return b===""||b==null?delete x[f]:x[f]=b,{...L,text:x}})},[]),Q=w.useCallback((f,b)=>{l(L=>{const x={...L.photos};return b?x[f]=b:delete x[f],{...L,photos:x}})},[]),H=w.useCallback(f=>$[f]?$[f]:(I.current.has(f)||(I.current.add(f),Fn(lt(ut,f)).then(b=>re(L=>({...L,[f]:URL.createObjectURL(b)}))).catch(()=>{I.current.delete(f)})),tc),[$]),Ye=w.useCallback((f,b,L)=>N({type:"photos",k:f,fallback:b,opts:L}),[]),Ie=w.useCallback(f=>{O(null),N({type:"link",...f})},[]),Oe=w.useCallback(f=>{O(null),N({type:"list",spec:f})},[]),Xe=w.useCallback(()=>{N(null),R(f=>f+1)},[]);w.useEffect(()=>{if(i!=="ready")return;const f=document.querySelector(".ed-bar");if(!f||typeof ResizeObserver>"u")return;const b=new ResizeObserver(()=>document.documentElement.style.setProperty("--ed-bar-h",`${f.offsetHeight}px`));return b.observe(f),()=>{b.disconnect(),document.documentElement.style.removeProperty("--ed-bar-h")}},[i]),w.useEffect(()=>{if(i!=="ready"||!_)return;const f=x=>x&&x.closest&&x.closest(".ed-bar, .ed-modal, .ed-toolbar, .ed-reset"),b=x=>{const z=x.target;f(z)||z&&z.closest&&z.closest("a[href]")&&x.preventDefault()},L=x=>{f(x.target)||x.preventDefault()};return document.addEventListener("click",b,!0),document.addEventListener("submit",L,!0),()=>{document.removeEventListener("click",b,!0),document.removeEventListener("submit",L,!0)}},[i,_]);const ae=w.useCallback((f,b)=>O({el:f,...b}),[]),an=w.useCallback(()=>setTimeout(()=>{(!document.activeElement||!document.activeElement.closest(".ed-field, .ed-toolbar"))&&O(null)},150),[]),cn=w.useMemo(()=>i==="ready"&&c?{draft:c,editing:_,revision:S,setText:j,photoUrl:H,openPhotos:Ye,openLink:Ie,openList:Oe,onFocusField:ae,onBlurField:an}:null,[i,c,_,S,j,H,Ye,Ie,Oe,ae,an]);w.useEffect(()=>{t(cn)},[cn,t]),w.useEffect(()=>()=>t(null),[t]);const xe=f=>{P(f),setTimeout(()=>P(b=>b===f?"":b),5e3)},Qe=()=>({updatedAt:vr(),updatedBy:_e.currentUser.uid,updatedByName:(_e.currentUser.email||"").slice(0,120)});async function Ys(){E("Saving draft…");try{const f=vt(h.current),b=fn(ce);b.set(Ee(ce,"siteContent","draft"),{...f,...Qe()}),await b.commit(),d(Ze(f)),xe("Draft saved. Only editors can see it.")}catch(f){xe(`Couldn’t save: ${Be(f)}`)}E("")}async function Xs(){N(null),E("Publishing…");try{const f=h.current,b={};for(const[Le,Zs]of Object.entries(f.photos)){b[Le]=[];for(const K of Zs)if(K.path&&K.path.startsWith("site-draft/")){const kt=K.path.slice(11),Te=lt(ut,`site/${kt}`);let dn=!1;try{await Ja(Te),dn=!0}catch{}if(!dn){const er=await Fn(lt(ut,K.path));await Ks(Te,er,{contentType:"image/jpeg",cacheControl:"public, max-age=31536000, immutable"})}b[Le].push({url:nc(`site/${kt}`),alt:K.alt||"",credit:K.credit||"",creditHref:K.creditHref||""})}else{const{path:kt,...Te}=K;b[Le].push({...K.url?{url:K.url}:{src:K.src||""},alt:Te.alt||"",credit:Te.credit||"",creditHref:Te.creditHref||""})}}const L=vt({...f,photos:b}),x=fn(ce);x.set(Ee(ce,"siteContent","published"),{...L,...Qe()}),x.set(Ee(ce,"siteContent","draft"),{...L,...Qe()}),x.set(Ee(mr(ce,"siteContentHistory")),{...L,...Qe()}),await x.commit();const z=Ze(L);l(z),d(z),g(z);try{localStorage.setItem("ws-site-published-v1",JSON.stringify(z))}catch{}xe("Published. The live site now shows these changes.")}catch(f){xe(`Couldn’t publish: ${Be(f)}`)}E("")}function Qs(){N(null),l(u),R(f=>f+1),xe("Unsaved changes discarded.")}function ln(){p&&!window.confirm("You have unsaved changes. Close the editor and lose them?")||(t(null),n())}if(i==="starting")return null;if(i==="signin"||i==="checking"||i==="denied")return a.jsx(ac,{status:i,user:s,note:A,onClose:ln});const un=c?oc(c,y||rc()):0;return a.jsxs(a.Fragment,{children:[_&&U&&U.el&&U.el.isConnected&&!U.heading&&a.jsx(cc,{field:U}),_&&U&&U.el&&U.el.isConnected&&a.jsx(lc,{field:U,draft:c,onReset:f=>{j(f,""),R(b=>b+1),O(null)}}),a.jsxs("div",{className:"ed-bar",role:"region","aria-label":"Website editor",children:[a.jsxs("div",{className:"ed-bar-state",children:[a.jsx("b",{children:"Website editor"}),a.jsx("span",{"aria-live":"polite",children:v||A||(p?"Unsaved changes":k?"Draft saved, not published yet":"Up to date with the live site")})]}),a.jsxs("div",{className:"ed-bar-actions",children:[a.jsx("button",{type:"button",className:_?"on":"","aria-pressed":_,onClick:()=>T(!0),children:"Edit"}),a.jsx("button",{type:"button",className:_?"":"on","aria-pressed":!_,onClick:()=>{T(!1),O(null)},children:"Preview"}),!ec&&a.jsx("button",{type:"button",onClick:()=>N({type:"sections"}),children:"Sections"}),a.jsx("button",{type:"button",onClick:Ys,disabled:!!v||!p,children:"Save draft"}),a.jsx("button",{type:"button",className:"primary",onClick:()=>N({type:"publish"}),disabled:!!v||!k,children:"Publish"}),a.jsx("button",{type:"button",onClick:()=>N({type:"discard"}),disabled:!!v||!p,children:"Discard"}),a.jsx("button",{type:"button",onClick:async()=>{p&&!window.confirm("Sign out and lose unsaved changes?")||await ws(_e)},children:"Sign out"}),a.jsx("button",{type:"button",onClick:ln,"aria-label":"Close the editor",children:"Close"})]})]}),C&&C.type==="photos"&&a.jsx(hc,{k:C.k,fallback:C.fallback,credits:C.opts&&C.opts.credits,list:c.photos[C.k],photoUrl:H,onChange:f=>Q(C.k,f),onClose:()=>N(null),addBlob:(f,b)=>re(L=>({...L,[f]:b}))}),C&&C.type==="link"&&a.jsx(mc,{spec:C,text:c.text,setText:j,onClose:Xe}),C&&C.type==="list"&&a.jsx(gc,{spec:C.spec,text:c.text,setText:j,onClose:Xe}),C&&C.type==="sections"&&a.jsx(fc,{order:c.order||$e,onChange:f=>l(b=>({...b,order:f})),onClose:()=>N(null)}),C&&C.type==="publish"&&a.jsx(Wn,{title:"Publish to the live website?",body:`Everyone visiting the site will see this draft (${un} change${un===1?"":"s"} from what’s live now).${p?" Your unsaved changes are included.":""}`,yes:"Publish",onYes:Xs,onNo:()=>N(null)}),C&&C.type==="discard"&&a.jsx(Wn,{title:"Discard unsaved changes?",body:"The page goes back to your last saved draft.",yes:"Discard",onYes:Qs,onNo:()=>N(null)})]})}function oc(n,e){let t=0;const s=(r,i)=>new Set([...Object.keys(r||{}),...Object.keys(i||{})]);for(const r of s(n.text,e.text))(n.text[r]||"")!==(e.text[r]||"")&&t++;for(const r of s(n.photos,e.photos))JSON.stringify(n.photos[r]||null)!==JSON.stringify(e.photos[r]||null)&&t++;return JSON.stringify(n.order||$e)!==JSON.stringify(e.order||$e)&&t++,t}function ac({status:n,user:e,note:t,onClose:s}){const[r,i]=w.useState(""),[o,c]=w.useState(""),[l,u]=w.useState(""),[d,y]=w.useState(null),[g,_]=w.useState(""),[T,S]=w.useState(!1);async function R(v){v.preventDefault(),_(""),S(!0);try{if(d){const E=d.hints.find(P=>P.factorId===ct.FACTOR_ID),A=ct.assertionForSignIn(E.uid,l.trim());await d.resolveSignIn(A)}else await vi(_e,r.trim(),o)}catch(E){if(E&&E.code==="auth/multi-factor-auth-required"){const A=Ii(_e,E);A.hints.some(P=>P.factorId===ct.FACTOR_ID)?y(A):_("This account uses a sign-in check the editor doesn’t support yet (only authenticator-app codes work here).")}else _(Be(E))}S(!1)}return a.jsx("div",{className:"ed-modal",role:"dialog","aria-modal":"true","aria-labelledby":"ed-signin-title",children:a.jsxs("div",{className:"ed-card",children:[a.jsx("h2",{id:"ed-signin-title",children:"Website editor"}),n==="checking"&&a.jsx("p",{children:"Checking your access…"}),n==="denied"&&a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:[e&&e.email?`${e.email} isn’t`:"This account isn’t"," approved to edit the website. Ask the owner to add it."]}),a.jsxs("div",{className:"ed-row",children:[a.jsx("button",{type:"button",onClick:()=>ws(_e),children:"Use another account"}),a.jsx("button",{type:"button",onClick:s,children:"Close"})]})]}),n==="signin"&&a.jsxs("form",{onSubmit:R,children:[a.jsx("p",{children:"Sign in to edit this website."}),d?a.jsxs("label",{children:["Code from your authenticator app",a.jsx("input",{inputMode:"numeric",autoComplete:"one-time-code",pattern:"[0-9]{6}",maxLength:6,value:l,onChange:v=>u(v.target.value),required:!0,autoFocus:!0})]}):a.jsxs(a.Fragment,{children:[a.jsxs("label",{children:["Email",a.jsx("input",{type:"email",autoComplete:"username",value:r,onChange:v=>i(v.target.value),required:!0})]}),a.jsxs("label",{children:["Password",a.jsx("input",{type:"password",autoComplete:"current-password",value:o,onChange:v=>c(v.target.value),required:!0})]})]}),(g||t)&&a.jsx("p",{className:"ed-error",role:"alert",children:g||t}),a.jsxs("div",{className:"ed-row",children:[a.jsx("button",{type:"button",onClick:s,children:"Close"}),a.jsx("button",{type:"submit",className:"primary",disabled:T,children:T?"Signing in…":d?"Verify":"Sign in"})]})]})]})})}function Gs(n){const[e,t]=w.useState(()=>n.getBoundingClientRect());return w.useEffect(()=>{const s=()=>t(n.getBoundingClientRect());window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s);const r=setInterval(s,400);return()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s),clearInterval(r)}},[n]),e}function cc({field:n}){const e=Gs(n.el),t=Math.max(8,e.top-46),s=Math.min(Math.max(8,e.left),window.innerWidth-330),r=(c,l)=>{n.el.focus(),document.execCommand(c,!1,l),n.el.dispatchEvent(new Event("input",{bubbles:!0}))},i=()=>{const c=window.prompt("Link address (https://…, mailto:… or tel:…)","https://");if(c==null)return;const l=wr(c);if(!l){window.alert("That link isn’t allowed. Use an address starting https://, mailto: or tel:.");return}r("createLink",l)},o=(c,l,u)=>a.jsx("button",{type:"button",title:l,"aria-label":l,onMouseDown:d=>d.preventDefault(),onClick:u,children:c});return a.jsxs("div",{className:"ed-toolbar",style:{top:t,left:s},role:"toolbar","aria-label":"Text formatting",children:[o(a.jsx("b",{children:"B"}),"Bold",()=>r("bold")),o(a.jsx("i",{children:"I"}),"Italic",()=>r("italic")),o("Link","Add a link",i),o("Unlink","Remove link",()=>r("unlink")),o("• List","Bulleted list",()=>r("insertUnorderedList")),o("1. List","Numbered list",()=>r("insertOrderedList")),o("Clear","Remove formatting",()=>r("removeFormat"))]})}function lc({field:n,draft:e,onReset:t}){const s=Gs(n.el),r=n.el.dataset.editKey;return!r||e.text[r]==null?null:a.jsx("button",{type:"button",className:"ed-reset",style:{top:Math.max(8,s.top-(n.heading?40:86)),left:Math.min(Math.max(8,s.left),window.innerWidth-170)},onMouseDown:i=>i.preventDefault(),onClick:()=>t(r),children:"Back to original"})}const uc='a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',Y={close:a.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M5 5l10 10M15 5L5 15"})}),up:a.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M10 15V5M5 9.5L10 4.5l5 5"})}),down:a.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M10 5v10M5 10.5l5 5 5-5"})}),remove:a.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M4 6h12M8 6V4.5h4V6M6 6l.8 9.5h6.4L14 6"})}),add:a.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[a.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2.5"}),a.jsx("circle",{cx:"9",cy:"10",r:"1.6"}),a.jsx("path",{d:"M21 15.5l-5-4.5-7.5 7"}),a.jsx("path",{d:"M18 2v5M15.5 4.5h5"})]}),arrow:a.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M4 10h11M11 6l4 4-4 4"})})};function Et({name:n,kicker:e,title:t,intro:s,wide:r,onClose:i,closeDisabled:o,footer:c,initialFocus:l,children:u}){const d=w.useRef(null),y=w.useRef({onClose:i,closeDisabled:o});return y.current={onClose:i,closeDisabled:o},w.useEffect(()=>{const g=_=>{const T=d.current;if(!T)return;if(_.key==="Escape"){_.preventDefault(),y.current.closeDisabled||y.current.onClose();return}if(_.key!=="Tab")return;const S=Array.from(T.querySelectorAll(uc)).filter(A=>A.offsetParent!==null||A.type==="file");if(!S.length){_.preventDefault(),T.focus();return}const R=S[0],v=S[S.length-1],E=document.activeElement;T.contains(E)?_.shiftKey&&(E===R||E===T)?(_.preventDefault(),v.focus()):!_.shiftKey&&E===v&&(_.preventDefault(),R.focus()):(_.preventDefault(),(_.shiftKey?v:R).focus())};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[]),w.useEffect(()=>{const g=document.activeElement,_=d.current,T=typeof matchMedia<"u"&&matchMedia("(pointer: fine)").matches;return(l&&T&&_.querySelector(l)||_).focus({preventScroll:!0}),document.documentElement.classList.add("ed-modal-open"),()=>{document.documentElement.classList.remove("ed-modal-open"),g&&g.isConnected&&g.focus&&!(g.closest&&g.closest(".ed-field"))&&g.focus({preventScroll:!0})}},[]),a.jsx("div",{className:"ed-modal",role:"dialog","aria-modal":"true","aria-labelledby":`ed-${n}-title`,"aria-describedby":s?`ed-${n}-intro`:void 0,children:a.jsxs("div",{className:`ed-card ed-dialog ed-dialog-${n}${r?" wide":""}`,ref:d,tabIndex:-1,children:[a.jsxs("header",{className:"ed-dhead",children:[a.jsxs("div",{className:"ed-dhead-text",children:[e&&a.jsx("span",{className:"ed-kicker",children:e}),a.jsx("h2",{id:`ed-${n}-title`,children:t}),s&&a.jsx("p",{className:"ed-intro",id:`ed-${n}-intro`,children:s})]}),a.jsx("button",{type:"button",className:"ed-x",onClick:i,disabled:o,"aria-label":"Close",title:o?"Fix the link first":"Close",children:Y.close})]}),a.jsx("div",{className:"ed-dbody",children:u}),a.jsx("footer",{className:"ed-dfoot",children:c})]})})}const $n=12,dc=n=>n.path?"New upload":n.url?"Uploaded":"Original";function hc({k:n,fallback:e,credits:t,list:s,photoUrl:r,onChange:i,onClose:o,addBlob:c}){const l=Array.isArray(s)&&s.length>0,u=l?s:e.map(I=>({src:I.src,alt:I.alt||"",credit:"",creditHref:""})),[d,y]=w.useState(""),[g,_]=w.useState(0),[T,S]=w.useState(!1),R=w.useRef(null),v=I=>i(I.length?I:null),E=(I,h)=>v(u.map((p,k)=>k===I?{...p,...h}:p)),A=(I,h)=>{const p=[...u],[k]=p.splice(I,1);p.splice(I+h,0,k),v(p)},P=I=>v(u.filter((h,p)=>p!==I));async function C(I){y("");const h=[];for(const p of Array.from(I||[])){_(k=>k+1);try{const k=await ic(p),j=`site-draft/${sc()}`;await Ks(lt(ut,j),k,{contentType:"image/jpeg"}),c(j,URL.createObjectURL(k)),h.push({path:j,alt:"",credit:"",creditHref:""})}catch(k){y(k.code?Be(k):k.message)}_(k=>k-1)}h.length&&v([...u,...h].slice(0,12)),R.current&&(R.current.value="")}const N=I=>I.path?r(I.path):I.url||I.src,U=u.length>=$n,O=u.length,$=O>1?`Slideshow · ${O} photos`:O===1?"Single photo":"No photos yet",re={onDragOver:I=>{!g&&!U&&(I.preventDefault(),S(!0))},onDragLeave:()=>S(!1),onDrop:I=>{I.preventDefault(),S(!1),!g&&!U&&C(I.dataTransfer.files)}};return a.jsxs(Et,{name:"photos",wide:!0,kicker:$,title:"Photos",intro:"One photo shows on its own. Two or more become a slideshow that changes every 10 seconds, in the order below.",onClose:o,footer:a.jsxs(a.Fragment,{children:[l&&a.jsxs("button",{type:"button",className:"ed-btn ghost",onClick:()=>i(null),children:["Use the original photo",e.length===1?"":"s"]}),a.jsx("button",{type:"button",className:"ed-btn primary",onClick:o,children:"Done"})]}),children:[a.jsxs("ol",{className:"ed-photos",children:[u.map((I,h)=>a.jsxs("li",{className:"ed-photo",children:[a.jsxs("figure",{className:"ed-photo-fig",children:[a.jsx("img",{src:N(I),alt:""}),a.jsx("span",{className:"ed-photo-num","aria-hidden":"true",children:h+1})]}),a.jsxs("div",{className:"ed-photo-main",children:[a.jsxs("div",{className:"ed-photo-head",children:[a.jsxs("span",{className:"ed-photo-name",children:[a.jsxs("b",{children:["Photo ",h+1]}),a.jsxs("span",{className:`ed-tag${I.path?" new":""}`,children:[h===0&&O>1?"Shown first · ":"",dc(I)]})]}),a.jsxs("span",{className:"ed-tools",role:"group","aria-label":`Photo ${h+1}`,children:[a.jsx("button",{type:"button",className:"ed-tool",onClick:()=>A(h,-1),disabled:h===0,"aria-label":"Move earlier",title:"Move earlier",children:Y.up}),a.jsx("button",{type:"button",className:"ed-tool",onClick:()=>A(h,1),disabled:h===O-1,"aria-label":"Move later",title:"Move later",children:Y.down}),a.jsxs("button",{type:"button",className:"ed-tool danger",onClick:()=>P(h),"aria-label":"Remove photo",title:"Remove photo",children:[Y.remove,a.jsx("span",{children:"Remove"})]})]})]}),a.jsxs("label",{className:"ed-fl",children:[a.jsxs("span",{className:"ed-fl-name",children:["Description ",a.jsx("em",{children:"read out by screen readers"})]}),a.jsx("input",{value:I.alt||"",maxLength:300,onChange:p=>E(h,{alt:p.target.value}),placeholder:"What the photo shows, e.g. The front of the inn on the High Street"})]}),t&&a.jsxs("div",{className:"ed-fl-pair",children:[a.jsxs("label",{className:"ed-fl",children:[a.jsx("span",{className:"ed-fl-name",children:"Credit"}),a.jsx("input",{value:I.credit||"",maxLength:300,onChange:p=>E(h,{credit:p.target.value}),placeholder:"Photographer, source, licence"})]}),a.jsxs("label",{className:"ed-fl",children:[a.jsxs("span",{className:"ed-fl-name",children:["Credit link ",a.jsx("em",{children:"optional"})]}),a.jsx("input",{value:I.creditHref||"",maxLength:500,onChange:p=>E(h,{creditHref:p.target.value}),placeholder:"https://…",inputMode:"url",autoCapitalize:"off",spellCheck:"false"})]})]})]})]},`${I.path||I.url||I.src}-${h}`)),!O&&a.jsx("li",{className:"ed-none",children:"No photos here. Add one below, or use the original."})]}),a.jsxs("label",{className:`ed-drop${T?" over":""}${g||U?" off":""}`,...re,children:[a.jsx("span",{className:"ed-drop-icon",children:g?a.jsx("span",{className:"ed-spin","aria-hidden":"true"}):Y.add}),a.jsxs("span",{className:"ed-drop-text",children:[a.jsx("b",{children:g?"Uploading…":U?`${$n} photos is the most for one spot`:O?"Add more photos":"Add photos"}),a.jsx("span",{children:U?"Remove one to add another.":"Choose from your device or drag them here. JPEG, PNG or WebP."})]}),a.jsx("input",{ref:R,type:"file",accept:"image/jpeg,image/png,image/webp",multiple:!0,onChange:I=>C(I.target.files),disabled:!!g||U,"aria-label":"Add photos"})]}),a.jsx("div",{"aria-live":"polite",className:"ed-live",children:d&&a.jsx("p",{className:"ed-error",role:"alert",children:d})}),t&&l&&a.jsx("p",{className:"ed-note",children:"Only use photos you have permission to use, and give the credit the licence asks for."})]})}function fc({order:n,onChange:e,onClose:t}){const s=(r,i)=>{const o=[...n],[c]=o.splice(r,1);o.splice(r+i,0,c),e(o)};return a.jsx(Et,{name:"sections",kicker:"Homepage",title:"Section order",intro:"The welcome photo and This week always come first. Change the order of the rest.",onClose:t,footer:a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",className:"ed-btn ghost",onClick:()=>e($e),children:"Original order"}),a.jsx("button",{type:"button",className:"ed-btn primary",onClick:t,children:"Done"})]}),children:a.jsx("ol",{className:"ed-sections",children:n.map((r,i)=>a.jsxs("li",{children:[a.jsx("span",{className:"ed-sec-num","aria-hidden":"true",children:i+1}),a.jsx("span",{className:"ed-sec-name",children:Rt[r]}),a.jsxs("span",{className:"ed-tools",children:[a.jsx("button",{type:"button",className:"ed-tool",onClick:()=>s(i,-1),disabled:i===0,"aria-label":`Move ${Rt[r]} up`,title:"Move up",children:Y.up}),a.jsx("button",{type:"button",className:"ed-tool",onClick:()=>s(i,1),disabled:i===n.length-1,"aria-label":`Move ${Rt[r]} down`,title:"Move down",children:Y.down})]})]},r))})})}const Js=[["#book","Book a room"],["#stay","Stay"],["#eat","Eat & drink"],["#whats-on","What’s on"],["#hire","Private hire"],["#visit","Find us"],["#nearby","Nearby"]];function pc(n){const e=String(n||"").trim();if(!e)return"";const t=Js.find(([s])=>e===s||e===`../${s}`);if(t)return`Jumps to ${t[1]} on the homepage`;if(e.startsWith("#"))return`Jumps to ${e} on this page`;if(/^mailto:/i.test(e))return`Starts an email to ${e.slice(7).split("?")[0]||"…"}`;if(/^tel:/i.test(e))return`Rings ${e.slice(4)||"…"}`;if(/^https?:\/\//i.test(e))try{return`Opens ${new URL(e).hostname.replace(/^www\./,"")} in a new tab`}catch{return"Opens another website"}return"Opens another page of this website"}function mc({spec:n,text:e,setText:t,onClose:s}){const{k:r,label:i,href:o}=n,c=e[r]!=null?e[r]:"",l=e[`${r}.href`]!=null?e[`${r}.href`]:"",u=l.trim()!==""&&!Bt(l),d=e[r]!=null||e[`${r}.href`]!=null,y=()=>{u||s()},g=c.trim()||i||"Button",_=l.trim()||o;return a.jsxs(Et,{name:"link",kicker:"Button or link",title:"Words and destination",onClose:y,closeDisabled:u,initialFocus:"#ed-link-words",footer:a.jsxs(a.Fragment,{children:[d&&a.jsx("button",{type:"button",className:"ed-btn ghost",onClick:()=>{t(r,""),t(`${r}.href`,"")},children:"Back to original"}),a.jsx("button",{type:"button",className:"ed-btn primary",onClick:y,disabled:u,children:"Done"})]}),children:[a.jsxs("div",{className:"ed-linkprev","aria-hidden":"true",children:[a.jsx("span",{className:"ed-linkprev-label",children:"On the page"}),a.jsxs("span",{className:"ed-linkprev-row",children:[a.jsx("span",{className:"ed-linkprev-pill",children:g}),a.jsx("span",{className:"ed-linkprev-arrow",children:Y.arrow}),a.jsx("span",{className:`ed-linkprev-dest${u?" bad":""}`,children:u?"Not a usable address yet":pc(_)||"Goes nowhere yet"})]})]}),a.jsxs("label",{className:"ed-fl",children:[a.jsx("span",{className:"ed-fl-name",children:"Words on it"}),a.jsx("input",{id:"ed-link-words",value:c,maxLength:200,placeholder:i,onChange:T=>t(r,T.target.value)}),i&&a.jsxs("span",{className:"ed-fl-hint",children:["Original: “",i,"”. Leave the box empty to keep it."]})]}),a.jsxs("label",{className:"ed-fl",children:[a.jsx("span",{className:"ed-fl-name",children:"Where it goes"}),a.jsx("input",{value:l,maxLength:600,placeholder:o,onChange:T=>t(`${r}.href`,T.target.value),inputMode:"url",autoCapitalize:"off",spellCheck:"false","aria-invalid":u||void 0,"aria-describedby":"ed-link-help"}),a.jsx("span",{className:"ed-fl-hint",id:"ed-link-help",children:"A web address (https://…), an email (mailto:name@example.com), a phone number (tel:+441564660303), or a part of the homepage below. Leave it empty to keep the original."})]}),u&&a.jsx("p",{className:"ed-error",role:"alert",children:"That address isn’t allowed. Start it with https://, mailto: or tel:, or pick a part of the page below."}),a.jsxs("div",{className:"ed-chips",role:"group","aria-label":"Parts of the homepage",children:[a.jsx("span",{className:"ed-chips-label",children:"Parts of the homepage"}),Js.map(([T,S])=>a.jsx("button",{type:"button",className:`ed-chip${l.trim()===T?" on":""}`,"aria-pressed":l.trim()===T,onClick:()=>t(`${r}.href`,T),children:S},T))]})]})}const Hn={double:"Double bed",king:"King size bed",single:"Single bed",shower:"Shower",bath:"Bath",tv:"Television",kettle:"Tea and coffee",heating:"Heating",hairdryer:"Hairdryer",towels:"Towels",bedding:"Extra bedding",historic:"Historic room"};function Vn({f:n,value:e,onChange:t}){const s=n.type==="url"&&e.trim()!==""&&!Bt(e);let r;if(n.type==="rich")r=a.jsx("span",{className:"ed-rich-note",children:"Change these words on the page: click them."});else if(n.type==="textarea"||n.type==="lines")r=a.jsx("textarea",{value:e,maxLength:n.max||3e3,rows:(n.type==="lines",3),onChange:i=>t(i.target.value),placeholder:n.placeholder||""});else if(n.type==="icons"){const i=new Set(e.split(",").map(o=>o.trim()).filter(Boolean));r=a.jsx("span",{className:"ed-icons",children:Object.entries(Hn).map(([o,c])=>a.jsxs("span",{className:"ed-check",children:[a.jsx("input",{type:"checkbox",id:`ic-${n.name}-${o}-${n._row}`,checked:i.has(o),onChange:l=>{const u=new Set(i);l.target.checked?u.add(o):u.delete(o),t(Object.keys(Hn).filter(d=>u.has(d)).join(","))}}),a.jsx("label",{htmlFor:`ic-${n.name}-${o}-${n._row}`,children:c})]},o))})}else r=a.jsx("input",{value:e,maxLength:n.max||600,inputMode:n.type==="number"?"numeric":n.type==="url"?"url":void 0,autoCapitalize:n.type==="url"?"off":void 0,spellCheck:n.type==="url"?"false":void 0,placeholder:n.placeholder||"",onChange:i=>t(n.type==="number"?i.target.value.replace(/[^0-9]/g,""):i.target.value)});return a.jsxs("div",{className:"ed-fieldrow",children:[n.type==="icons"?a.jsx("span",{className:"ed-flabel",children:n.label}):a.jsxs("label",{className:"ed-flabel",children:[n.label,n.type!=="rich"&&r]}),(n.type==="icons"||n.type==="rich")&&r,n.help&&a.jsx("span",{className:"ed-help",children:n.help}),s&&a.jsx("span",{className:"ed-error",role:"alert",children:"That address isn’t allowed. Use https://, mailto:, tel: or a part of the page like #book."})]})}function gc({spec:n,text:e,setText:t,onClose:s}){const{key:r,fields:i,fallback:o,title:c,help:l,record:u,extras:d=[],newItem:y,itemName:g="item",max:_=40,min:T=0}=n,S=e[r],R=S!=null&&S!=="",v=u?gr(S,i,o,!1)||o:_r(S,i,!1)||o,E=h=>t(r,JSON.stringify(h)),A=w.useRef(null);w.useEffect(()=>{const h=A.current;if(!h)return;A.current=null;const p=document.querySelectorAll(".ed-modal .ed-items > li")[h.row],k=p&&p.querySelector("textarea");if(k){k.focus();try{k.setSelectionRange(0,0)}catch{}}});const P=(h,p,k)=>{if(u){E({...v,[p]:k});return}const j=i.find(Q=>Q.name===p);if(j&&j.split&&/[\r\n]/.test(k)){const Q=Math.max(1,_-v.length+1);let H=yr(k).map((Ie,Oe,Xe)=>{let ae=Ie;return Oe>0&&(ae=ae.replace(/^[ \t]+/,"")),Oe<Xe.length-1&&(ae=ae.replace(/[ \t]+$/,"")),ae});H.length>Q&&(H=[...H.slice(0,Q-1),H.slice(Q-1).join(" ")]);const Ye=[...v.slice(0,h),...H.map(Ie=>({...v[h],[p]:Ie})),...v.slice(h+1)];H.length>1&&(A.current={row:h+H.length-1}),E(Ye);return}E(v.map((Q,H)=>H===h?{...Q,[p]:k}:Q))},C=(h,p)=>{const k=[...v],[j]=k.splice(h,1);k.splice(h+p,0,j),E(k)},N=h=>E(v.filter((p,k)=>k!==h)),U=()=>{const h={};for(const p of i)h[p.name]="";E([...v,{...h,...y?y():{}}])},O=(u?[v]:v).some(h=>i.some(p=>p.type==="url"&&(h[p.name]||"").trim()&&!Bt(h[p.name]))),$=i.filter(h=>!h.hidden),re=()=>{O||s()},I=h=>e[h.k]!=null?e[h.k]:"";return a.jsxs(Et,{name:"list",wide:!0,kicker:u?"Details":`List · ${v.length} ${g}${v.length===1?"":"s"}`,title:c,intro:l,onClose:re,closeDisabled:O,footer:a.jsxs(a.Fragment,{children:[R&&a.jsxs("button",{type:"button",className:"ed-btn ghost",onClick:()=>t(r,""),children:["Back to original ",u?"details":"list"]}),a.jsx("button",{type:"button",className:"ed-btn primary",onClick:re,disabled:O,children:"Done"})]}),children:[u?a.jsx("div",{className:"ed-item",children:$.map(h=>a.jsx(Vn,{f:{...h,_row:0},value:v[h.name]||"",onChange:p=>P(0,h.name,p)},h.name))}):a.jsxs("ol",{className:"ed-items",children:[v.map((h,p)=>a.jsxs("li",{className:"ed-item",children:[a.jsxs("div",{className:"ed-item-head",children:[a.jsx("b",{children:(h[$[0].name]||"").replace(/<[^>]*>/g,"").slice(0,60)||`New ${g}`}),a.jsxs("span",{className:"ed-tools",children:[a.jsx("button",{type:"button",className:"ed-tool",onClick:()=>C(p,-1),disabled:p===0,"aria-label":`Move ${g} ${p+1} up`,title:"Move up",children:Y.up}),a.jsx("button",{type:"button",className:"ed-tool",onClick:()=>C(p,1),disabled:p===v.length-1,"aria-label":`Move ${g} ${p+1} down`,title:"Move down",children:Y.down}),a.jsxs("button",{type:"button",className:"ed-tool danger",onClick:()=>N(p),disabled:v.length<=T,"aria-label":`Remove ${g} ${p+1}`,title:"Remove",children:[Y.remove,a.jsx("span",{children:"Remove"})]})]})]}),$.map(k=>a.jsx(Vn,{f:{...k,_row:p},value:h[k.name]||"",onChange:j=>P(p,k.name,j)},k.name))]},p)),!v.length&&a.jsx("li",{className:"ed-none",children:"Nothing here yet."})]}),!u&&v.length<_&&a.jsxs("button",{type:"button",className:"ed-addrow",onClick:U,children:[a.jsx("span",{"aria-hidden":"true",children:"+"})," Add ",g]}),d.length>0&&a.jsxs("div",{className:"ed-extras",children:[a.jsx("h3",{children:n.extrasTitle||"Other words"}),d.map(h=>a.jsxs("label",{className:"ed-flabel",children:[h.label,a.jsx("input",{value:I(h),maxLength:400,placeholder:h.fallback,onChange:p=>t(h.k,p.target.value)})]},h.k)),a.jsx("p",{className:"ed-help",children:"Leave a box empty to keep the original shown in grey."})]}),O&&a.jsx("p",{className:"ed-error",role:"alert",children:"One of the links isn’t allowed. Fix it before closing."})]})}function Wn({title:n,body:e,yes:t,onYes:s,onNo:r}){return a.jsx("div",{className:"ed-modal",role:"alertdialog","aria-modal":"true","aria-labelledby":"ed-confirm-title",children:a.jsxs("div",{className:"ed-card",children:[a.jsx("h2",{id:"ed-confirm-title",children:n}),a.jsx("p",{children:e}),a.jsxs("div",{className:"ed-row",children:[a.jsx("button",{type:"button",onClick:r,autoFocus:!0,children:"Cancel"}),a.jsx("button",{type:"button",className:"primary",onClick:s,children:t})]})]})})}export{vc as default};
